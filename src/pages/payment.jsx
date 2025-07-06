import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

// Use environment variable for Stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_actual_stripe_key_here');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [amount, setAmount] = useState(2000); // $20.00 in cents

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setPaymentStatus('');

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: 'Customer Name',
        email: 'customer@example.com',
      },
    });

    if (error) {
      console.error('Error:', error);
      setPaymentStatus(`Payment failed: ${error.message}`);
      setIsProcessing(false);
      return;
    }

    // In a real application, you would send the paymentMethod.id to your backend
    // to create a payment intent and process the payment
    console.log('PaymentMethod created:', paymentMethod);
    
    // IMPORTANT: This is just a simulation - no actual payment is processed
    // To see real payments in Stripe dashboard, you need:
    // 1. A backend server to create payment intents
    // 2. Call stripe.confirmPayment() instead of setTimeout
    setTimeout(() => {
      setPaymentStatus('Payment method created successfully! (No actual charge - this is a demo)');
      setIsProcessing(false);
    }, 2000);
  };

  const cardStyle = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding: '12px',
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>Payment Details</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Amount: $
          <input
            type="number"
            value={amount / 100}
            onChange={(e) => setAmount(Math.round(e.target.value * 100))}
            step="0.01"
            min="0.50"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ 
          marginBottom: '20px', 
          padding: '12px', 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          backgroundColor: '#f9f9f9'
        }}>
          <CardElement options={cardStyle} />
        </div>

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isProcessing ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: isProcessing ? 'not-allowed' : 'pointer'
          }}
        >
          {isProcessing ? 'Processing...' : `Pay $${(amount / 100).toFixed(2)}`}
        </button>
      </form>

      {paymentStatus && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: paymentStatus.includes('successful') ? '#d4edda' : '#f8d7da',
          color: paymentStatus.includes('successful') ? '#155724' : '#721c24',
          borderRadius: '4px'
        }}>
          {paymentStatus}
        </div>
      )}

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Test card: 4242 4242 4242 4242 | Any future date | Any CVC
        </p>
      </div>
    </div>
  );
};

const Payment = () => {
  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
        <Link to="/counter">Counter</Link>
      </nav>

      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Payment Page</h1>
      
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

      <div style={{ marginTop: '40px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h3>� Why No Money Shows in Stripe Dashboard?</h3>
        <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
          <strong>⚠️ Current Status:</strong> This is a DEMO that only creates payment methods - no actual charges are processed!
        </div>
        
        <h4>🔧 To Process Real Payments:</h4>
        <ol>
          <li><strong>Create a Backend Server:</strong>
            <ul style={{ marginTop: '5px', marginLeft: '20px' }}>
              <li>Use Node.js, Python, PHP, etc.</li>
              <li>Install Stripe SDK on your backend</li>
              <li>Create an endpoint to handle payment intents</li>
            </ul>
          </li>
          <li><strong>Replace Simulation Code:</strong>
            <ul style={{ marginTop: '5px', marginLeft: '20px' }}>
              <li>Send paymentMethod.id to your backend</li>
              <li>Create a PaymentIntent on the server</li>
              <li>Use stripe.confirmPayment() instead of setTimeout</li>
            </ul>
          </li>
          <li><strong>Use Your Secret Key:</strong>
            <ul style={{ marginTop: '5px', marginLeft: '20px' }}>
              <li>Backend needs your SECRET key (sk_test_...)</li>
              <li>Never put secret keys in frontend code</li>
            </ul>
          </li>
        </ol>
        
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#d4edda', borderRadius: '4px' }}>
          <strong>✅ What's Working:</strong> Payment method creation, card validation, Stripe integration
        </div>
        
        <p><strong>📝 Note:</strong> Once you add a backend server, you'll see real transactions in your Stripe dashboard!</p>
      </div>
    </div>
  );
};

export default Payment;

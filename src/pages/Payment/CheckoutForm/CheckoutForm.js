import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState(null)
  const [transID, setTransID] = useState('')
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe()
  const elements = useElements()
  const { buyersName, price, productName, productId, buyersEmail, _id } = booking
  const navigate = useNavigate()

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('crashGuitarToken')}`
      },
      body: JSON.stringify({ price }),

    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: card
    })

    if (error) {

      setCardError(error.message)
    } else {
      setCardError('')
    }
    setSuccess(null)
    setProcessing(true)
    const { paymentIntent, error: confrimError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: buyersName,
            email: buyersEmail
          },
        },
      },
    );

    if (confrimError) {
      setCardError(confrimError.message)
      return
    }
    if (paymentIntent.status === "succeeded") {
      setSuccess("Congratulations..Payment Successful")
      setTransID(paymentIntent.id)

      fetch(`http://localhost:5000/myorders/${_id}`,{
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
        })

      fetch(`http://localhost:5000/products/${productId}`, {
        method: "PUT",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'Paid' })
      })
        .then(res => res.json())
        .then(data => {

        })

    }
    toast.success("Succesfully Paid! Order Confirmed!")
    navigate('/')
    setProcessing(false)
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#124270',
                '::placeholder': {
                  color: '#124270',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm my-4 bg-cyan-800 text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className="text-center text-red-600">{cardError}</p>
      {
        success && <div>
          <p className="text-center text-green-600">{success}</p>
          <p className="text-center ">Transaction id : <strong>{transID}</strong> </p>
        </div>
      }
    </div>
  );
};

export default CheckoutForm;
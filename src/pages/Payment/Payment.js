import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51M7I24FpFBm5JqXjin83xSWIwfxqeuR9TAqqchrAfOpG6M0GyrJReMk61gC0CMrf6BkseiL25phsduZ5u1x2VyCs00NAyp64sS');

const Payment = () => {
    const booking = useLoaderData()
    const { buyersName, price, productName } = booking

    return (
        <div className='flex justify-center'>

            <div>
            <h1 className="text-center text-3xl">Welcome  {buyersName}</h1>
            <h1 className="text-center text-3xl">Payment For {productName}</h1>
            <p>Please Pay <strong>${price}</strong> </p>

            <div className='my-10 '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    ></CheckoutForm>
                </Elements>
            </div>
            </div>
        </div>
    );
};

export default Payment;
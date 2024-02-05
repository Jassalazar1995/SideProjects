import { useEffect, useState, useRef } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment(props) {
  const stripePromise = useRef(null);
  const clientSecret = useRef("");

  useEffect(() => {
    fetch("/config").then(async (res) => {
      const { publishableKey } = await res.json();
      stripePromise.current = loadStripe(publishableKey);
    });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (res) => {
      const { clientSecret } = await res.json();

      clientSecret.current = clientSecret;
    });
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
    </>
  );
}

export default Payment;

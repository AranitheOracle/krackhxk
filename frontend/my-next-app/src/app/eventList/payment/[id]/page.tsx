"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  // 1. Grab the event ID from the dynamic route (e.g. /eventList/payment/123)
  const { id: eventId } = useParams();

  // 2. Grab any query parameters (e.g. ?seats=50)
  const searchParams = useSearchParams();
  const seats = parseInt(searchParams.get("seats") ?? "0", 10);

  // For demo, assume a fixed price per seat:
  const pricePerSeat = 50;
  const totalPrice = seats * pricePerSeat;

  // Local state for payment form inputs:
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  // Example handler for form submission:
  const handlePayment = () => {
    // Implement your payment logic here (e.g., integrate with Stripe, etc.)
    alert(`Payment confirmed for Event ID: ${eventId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Payment Options</h1>
        <p className="mb-2">Event ID: {eventId}</p>
        <p className="mb-2">Seats Remaining: {seats}</p>
        <p className="mb-4">Total Price: ${totalPrice}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePayment();
          }}
        >
          {/* Name on Card */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name on Card</label>
            <input
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          {/* Expiry + CVC */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold">Expiry (MM/YY)</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                placeholder="06/25"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-semibold">CVC</label>
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                placeholder="123"
                required
              />
            </div>
          </div>

          {/* Confirm Payment */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}

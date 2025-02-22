// src/app/eventList/payment/[id]/page.tsx
import { useSearchParams } from "next/navigation";

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("id");
  const seats = searchParams.get("seats");

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold">Payment Options</h1>
      <p className="mt-2">Event ID: {eventId}</p>
      <p>Seats Remaining: {seats}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Proceed to Pay
      </button>
    </div>
  );
};

export default PaymentPage;
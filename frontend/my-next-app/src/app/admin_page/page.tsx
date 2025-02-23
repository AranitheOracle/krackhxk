"use client";
import { useState } from "react";
import useEventStore, { EventType } from "@/store/eventStore";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AdminPage() {
  const { addEvent } = useEventStore();
  const [newEvent, setNewEvent] = useState({
    title: "",
    image: "",
    description: "",
    location: "",
    time: "",
    remainingSeats: "",
    type: "",
  });
  const [selectedEventDate, setSelectedEventDate] = useState<Date | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setNewEvent({ ...newEvent, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.image || !selectedEventDate) return;
    const eventToAdd: EventType = {
      ...newEvent,
      id: Date.now(),
      date: selectedEventDate.toISOString(),
      remainingSeats: Number(newEvent.remainingSeats),
      type: newEvent.type,
    };
    addEvent(eventToAdd);
    // Reset form fields
    setNewEvent({
      title: "",
      image: "",
      description: "",
      location: "",
      time: "",
      remainingSeats: "",
      type: "",
    });
    setSelectedEventDate(null);
    setImagePreview(null);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Admin Panel - Manage Events
      </h1>
      {/* Add Event Form */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
        <input
          className="w-full p-2 mb-2 bg-gray-700 rounded"
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) =>
            setNewEvent({ ...newEvent, title: e.target.value })
          }
        />
        <textarea
          className="w-full p-2 mb-2 bg-gray-700 rounded"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <input
          className="w-full p-2 mb-2 bg-gray-700 rounded"
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent({ ...newEvent, location: e.target.value })
          }
        />
        <input
          className="w-full p-2 mb-2 bg-gray-700 rounded"
          type="text"
          placeholder="Time"
          value={newEvent.time}
          onChange={(e) =>
            setNewEvent({ ...newEvent, time: e.target.value })
          }
        />
        <input
          className="w-full p-2 mb-2 bg-gray-700 rounded"
          type="number"
          placeholder="Remaining Seats"
          value={newEvent.remainingSeats}
          onChange={(e) =>
            setNewEvent({ ...newEvent, remainingSeats: e.target.value })
          }
        />
        <input
          className="w-full p-2 mb-2 bg-gray-700 rounded"
          type="text"
          placeholder="Type"
          value={newEvent.type}
          onChange={(e) =>
            setNewEvent({ ...newEvent, type: e.target.value })
          }
        />
        {/* Date Picker for Event Date */}
        <div className="mb-2">
          <label className="block mb-1">Select Event Date:</label>
          <DatePicker
            selected={selectedEventDate}
            onChange={(date) => setSelectedEventDate(date)}
            className="w-full p-2 rounded-md border border-gray-300 text-black"
            placeholderText="Choose a date"
          />
        </div>
        <input
          className="w-full p-2 mb-2 bg-gray-700 rounded"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {imagePreview && (
          <div className="mt-4">
            <p className="text-gray-400 mb-2">Image Preview:</p>
            <Image
              src={imagePreview}
              alt="Event Preview"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        )}
        <button
          onClick={handleAddEvent}
          className="w-full bg-blue-500 hover:bg-blue-600 p-2 mt-4 rounded"
        >
          Add Event
        </button>
      </div>
    </div>
  );
}

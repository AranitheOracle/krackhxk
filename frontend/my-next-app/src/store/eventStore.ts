import { create } from "zustand";

export interface EventType {
  id: number;
  title: string;
  description: string;
  date: string; // ISO date string (e.g., "2025-03-10")
  time: string;
  location: string;
  image: string;
  remainingSeats: number;
  type: string;
}

interface EventStore {
  events: EventType[];
  addEvent: (event: EventType) => void;
  deleteEvent: (id: number) => void;
}

const useEventStore = create<EventStore>((set) => ({
  events: [
    {
      id: 1,
      title: "Music Festival 2025",
      description: "An electrifying night with the best artists around the world.",
      date: "2025-03-10",
      time: "7:00 PM",
      location: "IIT Mandi Campus",
      image: "/images/image.png",
      remainingSeats: 50,
      type: "Music",
    },
    {
      id: 2,
      title: "Tech Conference 2025",
      description: "Join the biggest tech innovators and leaders in this grand event.",
      date: "2025-04-15",
      time: "10:00 AM",
      location: "IIT Mandi Auditorium",
      image: "/images/tech-conference.jpg",
      remainingSeats: 30,
      type: "Tech",
    },
    {
      id: 3,
      title: "Astronomy Night",
      description: "A night under the stars with telescopes and expert discussions.",
      date: "2025-05-05",
      time: "8:00 PM",
      location: "Observatory, IIT Mandi",
      image: "/images/astronomy.jpg",
      remainingSeats: 20,
      type: "Astronomy",
    },
  ],
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  deleteEvent: (id) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
    })),
}));

export default useEventStore;

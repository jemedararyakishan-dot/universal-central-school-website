import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Universal Central School",
  description:
    "Contact Universal Central School, Mahabubnagar. Campus addresses at Mettugadda and Sri Ramakrishna Colony, direct phone numbers, email, and location guidance.",
};

export default function ContactPage() {
  return <ContactClient />;
}

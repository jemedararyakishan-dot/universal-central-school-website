import type { Metadata } from "next";
import AdmissionsClient from "./AdmissionsClient";

export const metadata: Metadata = {
  title: "Admissions | Universal Central School",
  description:
    "Admissions guidelines and enquiry for Universal Central School, Mahabubnagar. Welcoming students from Nursery to Grade VII across Mettugadda and Sri Ramakrishna Colony campuses.",
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}

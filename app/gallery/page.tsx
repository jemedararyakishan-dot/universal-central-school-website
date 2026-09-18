import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Universal Central School",
  description:
    "Visual photo archive of Universal Central School, Mahabubnagar. Campus grounds, classrooms, student activities, and achievements.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}

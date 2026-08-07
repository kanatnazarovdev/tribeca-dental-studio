/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

// Revalidate static page every 60 seconds (ISR)
export const revalidate = 60;

export interface TestimonialItem {
  _id: string;
  patientName: string;
  slug: string;
  treatmentCategory: string;
  rating: number;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

async function getAllTestimonials(): Promise<TestimonialItem[]> {
  const query = `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    patientName,
    "slug": slug.current,
    treatmentCategory,
    rating,
    description,
    videoUrl,
    "thumbnailUrl": thumbnail.asset->url + "?w=800&h=600&fit=crop&q=95&auto=format"
  }`;
  return await client.fetch(query);
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Patient Testimonials & Video Reviews | Tribeca Dental Studio",
    description: "Watch real video stories and read testimonials from patients at Tribeca Dental Studio in Lower Manhattan.",
  };
}

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "es" },
    { lang: "zh" },
  ];
}

export default async function TestimonialsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const testimonials = await getAllTestimonials();

  return <TestimonialsClient testimonials={testimonials} lang={lang} />;
}
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Patient Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'patientName',
      title: 'Patient / Family Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'patientName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'treatmentCategory',
      title: 'Treatment Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cosmetic Dentistry & Veneers', value: 'cosmetic' },
          { title: 'Pediatric Dentistry', value: 'pediatric' },
          { title: 'Orthodontics & Aligners', value: 'orthodontics' },
          { title: 'Dental Implants', value: 'implants' },
          { title: 'General & Preventative', value: 'general' },
        ],
      },
    }),
    defineField({
      name: 'rating',
      title: 'Star Rating (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'description',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'YouTube / Video URL',
      type: 'url',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Patient Photo / Thumbnail',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'patientName',
      subtitle: 'treatmentCategory',
      media: 'thumbnail',
    },
  },
})
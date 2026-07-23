import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'beforeAfter',
  title: 'Before & After Cases',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Case Title',
      type: 'string',
      description: 'e.g., "Full Mouth Porcelain Veneers" or "Phase 1 Palatal Expansion"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Treatment Category',
      type: 'string',
      options: {
        list: [
          { title: 'Porcelain Veneers & Smile Design', value: 'veneers' },
          { title: 'Pediatric Orthodontics & Airway', value: 'pediatric-ortho' },
          { title: 'Invisalign® & Adult Orthodontics', value: 'orthodontics' },
          { title: 'Dental Implants & All-on-4®', value: 'implants' },
          { title: 'Cosmetic Bonding & Resin Infiltration', value: 'bonding' },
          { title: 'Laser Gum Recontouring', value: 'laser' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'patientAge',
      title: 'Patient Age or Age Group (Optional)',
      type: 'string',
      description: 'e.g., "Age 8" or "Adult"',
    }),
    defineField({
      name: 'treatmentDuration',
      title: 'Treatment Duration',
      type: 'string',
      description: 'e.g., "2 Visits", "6 Months", "12 Months"',
    }),
    defineField({
      name: 'description',
      title: 'Case Overview / Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the concern and the clinical solution provided.',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured on Gallery / Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'afterImage',
    },
    prepare({ title, category, media }) {
      return {
        title: title || 'Untitled Case',
        subtitle: category ? `Category: ${category}` : 'No category',
        media,
      }
    },
  },
})
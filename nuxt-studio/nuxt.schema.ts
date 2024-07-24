import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      title: 'UI',
      description: 'UI configuration',
      icon: 'i-ph-palette-fill',
      fields: {
        primaryColor: field({
          type: 'string',
          title: 'Primary',
          description: 'Primary color of your UI.',
          icon: 'i-ph-palette',
          default: 'sky',
          required: ['blue', 'green', 'red'],
        })
      }
    }),
    seo: group({
      title: 'SEO',
      description: 'SEO configuration',
      icon: 'i-ph-search-fill',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Default title for your website.',
          icon: 'i-ph-search',
          default: 'My Nuxt Studio App',
        }),
        description: field({
          type: 'string',
          title: 'Description',
          description: 'Default description for your website.',
          icon: 'i-ph-search',
          default: 'My Nuxt Studio App',
        }),
      }
    }),
  }
})
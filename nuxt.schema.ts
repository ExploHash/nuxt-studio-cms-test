import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    global: group({
      title: 'Global',
      description: 'Global configuration',
      icon: 'i-ph-palette-fill',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'The title of the app',
        })
      }
    }),
    seo: group({
      title: 'SEO',
      description: 'SEO configuration',
      icon: 'i-ph-seo',
      fields: {
        keywords: field({
          type: 'string',
          title: 'Keywords',
          description: 'Keywords for SEO',
        })
      }
    })
  }
})
'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import type { CommentsConfig } from 'pliny/comments'

export default function Comments({ slug }: { slug: string }) {
  if (!siteMetadata.comments?.provider) return null

  const commentsConfig: CommentsConfig = {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID ?? '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  }

  return <CommentsComponent commentsConfig={commentsConfig} slug={slug} />
}

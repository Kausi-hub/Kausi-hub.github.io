'use client'

import { useEffect, useState } from 'react'
import { FaLinkedin, FaCopy } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

interface ShareButtonProps {
  title: string
}

export default function ShareButton({ title }: ShareButtonProps) {
  const [url, setUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy link:', error)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="text-gray-500 hover:text-black dark:hover:text-white"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="text-gray-500 hover:text-black dark:hover:text-white"
      >
        <FaXTwitter size={22} />
      </a>

      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="text-gray-500 hover:text-green-600 dark:hover:text-green-400"
      >
        <FaCopy size={22} />
      </button>

      {copied && <span className="text-sm text-green-600">Copied!</span>}
    </div>
  )
}

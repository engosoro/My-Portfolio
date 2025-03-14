import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Merges Tailwind class names while handling conditional logic
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

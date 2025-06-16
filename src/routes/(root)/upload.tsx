import { createFileRoute } from '@tanstack/react-router'
import { MaterialUpload } from '@/components/MaterialUpload'

export const Route = createFileRoute('/(root)/upload')({
  component: MaterialUpload,
})

import { createFileRoute } from '@tanstack/react-router'
import { MaterialUpload } from '../components/MaterialUpload'

export const Route = createFileRoute('/upload')({
  component: UploadPage,
})

function UploadPage() {
  return <MaterialUpload />
}
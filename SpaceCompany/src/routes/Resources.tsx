import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Resources')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/index/Resources"!</div>
}

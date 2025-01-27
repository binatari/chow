
import { Button } from '@/components/ui/button'
import { RouteError } from '@/lib/types'
import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError() as RouteError

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-left">
      <h1>oops</h1>
      <p className="font-mono">
        <span className="mr-2">{error?.status}</span>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Button asChild>
        <Link to="/">Go back to homepage</Link>
      </Button>
    </div>
  )
}
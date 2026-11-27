import { FoundationLine } from '../components/brand/FoundationLine'
import { ButtonLink } from '../components/ui/Buttons'

export default function NotFound() {
  return (
    <div className="container-page py-32">
      <h1 className="font-light text-[48px]">Page not found</h1>
      <FoundationLine className="mt-5" />
      <p className="mt-6 text-ink/70">This page doesn’t exist. Let’s take you one step back.</p>
      <div className="mt-8">
        <ButtonLink to="/">Go to the home page</ButtonLink>
      </div>
    </div>
  )
}

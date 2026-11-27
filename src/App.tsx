import { MotionConfig } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { ToastProvider } from './components/ui/ToastProvider'
import Home from './pages/Home'

// Inner pages are split into their own chunks so the first load stays light.
const About = lazy(() => import('./pages/About'))
const Courses = lazy(() => import('./pages/Courses'))
const Results = lazy(() => import('./pages/Results'))
const Admissions = lazy(() => import('./pages/Admissions'))
const Contact = lazy(() => import('./pages/Contact'))
const StudentZone = lazy(() => import('./pages/StudentZone'))
const NotFound = lazy(() => import('./pages/NotFound'))

const page = (Component: React.ComponentType) => (
  <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: page(About) },
      { path: '/courses', element: page(Courses) },
      { path: '/results', element: page(Results) },
      { path: '/admissions', element: page(Admissions) },
      { path: '/student-zone', element: page(StudentZone) },
      { path: '/contact', element: page(Contact) },
      { path: '*', element: page(NotFound) },
    ],
  },
])

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </MotionConfig>
  )
}

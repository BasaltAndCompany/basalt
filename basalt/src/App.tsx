import { MetaProvider, Title } from "@solidjs/meta"
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { ErrorBoundary, Suspense } from "solid-js"
import "./index.css"

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Basalt &amp; Company</Title>
          {/* Routes are lazy() — SSR renders nothing without a Suspense boundary. */}
          <ErrorBoundary fallback={<p>Something broke.</p>}>
            <Suspense>{props.children}</Suspense>
          </ErrorBoundary>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}

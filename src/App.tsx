import { LazyMotion, m } from "framer-motion";

// Make sure to return the specific export containing the feature bundle.
const loadFeatures = () => import("./features").then((res) => res.default);

// This animation will run when loadFeatures resolves.
export function App() {
  return (
    <LazyMotion features={loadFeatures}>
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    </LazyMotion>
  );
}

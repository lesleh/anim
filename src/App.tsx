import { LazyMotion, m } from "framer-motion";

// Make sure to return the specific export containing the feature bundle.
const loadFeatures = () => import("./features").then((res) => res.default);

const variants = {
  visible: (_custom) => ({
    opacity: 1,
    transition: { delay: Math.random(), duration: 0.5 },
  }),
} as const;

const words =
  "Shoot for the stars! But not actually, because you'll just waste ammo and hit nothing.".split(
    "",
  );

// This animation will run when loadFeatures resolves.
export function App() {
  return (
    <LazyMotion features={loadFeatures}>
      <h1
        style={{ maxWidth: "500px", textAlign: "center", textWrap: "balance" }}
      >
        {words.map((word, i) => (
          <m.span
            custom={i}
            initial={{ opacity: 0 }}
            animate="visible"
            variants={variants}
          >
            {word}
          </m.span>
        ))}
      </h1>
    </LazyMotion>
  );
}

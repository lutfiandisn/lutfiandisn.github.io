import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function LazySection({ component: Component, threshold = 0.2 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  // 💫 Skeleton shimmer placeholder
  const Skeleton = () => (
    <div className="animate-pulse space-y-4 py-12 px-6">
      <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
      <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
      <div className="h-48 w-full bg-gray-200 rounded-lg"></div>
    </div>
  );

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<Skeleton />}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Component />
          </motion.div>
        </Suspense>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

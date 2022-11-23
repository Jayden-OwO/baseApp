import { lazy, Suspense, useState } from 'react';

// import UmiLoading from '@/components/UmiLoading';

const App = lazy(() => import('./App'));

export default function (props: any) {
  const [loading, setLoading] = useState(true);

  return (
    // <Suspense fallback={<UmiLoading />}>{loading ? null : <App {...props} />}</Suspense>
    <Suspense fallback={<></>}>
      <App {...props} />
    </Suspense>
  );
}

import Button from "../components/Button";
import Num from "../components/Num";
import User from "../components/User";
import { fetchData } from "../utils";
import { Suspense, useState } from "react";
import ErrorBoundaryPage from "./ErrorBoundaryPage";

const initialResource = fetchData();

export default function TransitionPage() {
  const [resource, setresource] = useState(initialResource);
  return (
    <div>
      <h3>TransitionPage</h3>

      <ErrorBoundaryPage fallback={<h1>出错了</h1>}>
        <Suspense fallback={<h1>Loading user..</h1>}>
          <User resource={resource} />
        </Suspense>

        <Suspense fallback={<h1>Loading num..</h1>}>
          <Num resource={resource} />
        </Suspense>
      </ErrorBoundaryPage>

      <button onClick={() => setresource(fetchData())}>refresh</button>

      <Button refresh={() => setresource(fetchData())} />
    </div>
  );
}

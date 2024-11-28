import { useEffect, useState } from "react";

export default function LoadingPage() {
  const [loading, setLoading] = useState(true);

  // 模拟异步加载
  useEffect(() => {
    // ajax
    setTimeout(() => {
      //

      setLoading(false);
      console.log(
        "%c [  ]-12",
        "font-size:13px; background:pink; color:#bf2c9f;",
        loading
      );
    }, 3000);
  }, []);

  return (
    <div>
      <h3>LoadingPage</h3>

      <p>{loading ? "loading..." : "data"}</p>

      {/* data */}
    </div>
  );
}

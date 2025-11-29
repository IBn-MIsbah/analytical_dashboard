import { defaultMaxListeners } from "events";
import Link from "next/link";

const F1 = () => {
  return (
    <div>
      <h1>F1</h1>
      <Link href="/f1/f2">F2</Link>
    </div>
  );
};
export default F1;

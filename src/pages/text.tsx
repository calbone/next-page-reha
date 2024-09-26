import { textState } from "../state/textState";
import { useRecoilValue } from "recoil";
import Link from "next/link";

export default function Text() {
  const text = useRecoilValue(textState);

  return (
    <div>
      <p>You entered: {text}</p>
      <Link href="/">ホームへ</Link>
    </div>
  );
}
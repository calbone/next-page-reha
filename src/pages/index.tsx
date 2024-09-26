import { useRecoilState, useRecoilValue } from "recoil";
import { charCountState, textState } from "../state/textState";
import { ChangeEvent } from "react";
import Link from "next/link";

export default function Home() {
  const [text, setText] = useRecoilState(textState);
  const charCount = useRecoilValue(charCountState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You entered: {text}</p>
      <p>Character count: {charCount}</p>
      <Link href="/text">textへ</Link>
    </div>
  );
}
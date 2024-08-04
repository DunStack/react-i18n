import { useContext } from "react";
import { T } from "../../lib/main";
import { Language } from "../App";

export default function HomePage() {
  const { lang, setLang } = useContext(Language)!;

  return (
    <>
      <button disabled={lang === "en"} onClick={() => setLang("en")}>
        en
      </button>
      <button disabled={lang === "vi"} onClick={() => setLang("vi")}>
        vi
      </button>
      <div>
        <T id="hello.react" />
      </div>
    </>
  );
}

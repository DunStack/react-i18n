import { createContext, useState } from "react";
import { I18nProvider } from "../lib/main";
import HomePage from "./pages/home";
import en from "./resources/en.json";
import vi from "./resources/vi.json";

const resources = {
  en,
  vi,
};

interface LanguageContext {
  lang: string;
  setLang: React.Dispatch<string>;
}
export const Language = createContext<LanguageContext | undefined>(undefined);

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <I18nProvider locale={lang} resources={resources} fallbackLocale="en">
      <Language.Provider value={{ lang, setLang }}>
        <HomePage />
      </Language.Provider>
    </I18nProvider>
  );
}

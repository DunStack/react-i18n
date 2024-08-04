import { createContext, useContext } from "react";
import { getIn } from "./utils";

interface Resource {
  [key: string]: string | this;
}

interface I18nContext {
  locale: string;
  resources: Record<string, Resource>;
  fallbackLocale: string;
}

const I18nContext = createContext<Resource | undefined>(undefined);

export function I18nProvider({
  children,
  locale,
  resources,
}: React.PropsWithChildren<I18nContext>) {
  return (
    <I18nContext.Provider value={resources[locale]}>
      {children}
    </I18nContext.Provider>
  );
}

interface TProps {
  id: string;
}

export function T({ id }: TProps) {
  const t = useContext(I18nContext)!;

  return <>{getIn(t, id)}</>;
}

import { createContext, useContext, useMemo, useState } from "react";
import { Page } from "./type";

type PageContextType = {
  page: Page,
  setPage: any,
}

export const PageContext = createContext({
  page: Page.Knockout,
  setPage: null
} as PageContextType);

// For the context of this app, useContext hook is unnecessary
// The scope of the app is simple enough for 'prop drilling'
// The usage of useContext here is purely for educational purpose
// Check reference: https://kentcdodds.com/blog/application-state-management-with-react
export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(Page.Knockout);

  // useMemo here to memorise the pageContext object
  // In case if PageProvider is forced to re-render without actual state change (on the main object)
  // This pageContext object will not change -> does not affect the consumer components
  const pageContext = useMemo(() => ({ page, setPage }), [page, setPage]);

  return (
    <PageContext.Provider value={pageContext}>
      {children}
    </PageContext.Provider>
  )
}

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be within a PageProvider');
  }

  return context;
}
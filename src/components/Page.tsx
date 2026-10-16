import { ReactNode } from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface PageProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function Page({ title, description, children }: PageProps) {
  useDocumentMeta(title, description);
  return (
    <main id="main" tabIndex={-1} className="flex flex-1 flex-col justify-center outline-none">
      {children}
    </main>);

}
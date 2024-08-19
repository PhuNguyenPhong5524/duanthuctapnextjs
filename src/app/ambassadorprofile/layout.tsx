
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Ambassador Profile Page",
  };
  
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}
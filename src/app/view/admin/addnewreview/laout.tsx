
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Add New Review Page",
  };

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}
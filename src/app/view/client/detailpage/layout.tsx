
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Detail Product Page",
  };

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}
import HeadLG from "@/app/component/headlg/head";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Ambassador Signup Page",
  };
  
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <HeadLG />
            {children}
        </section>
    );
}
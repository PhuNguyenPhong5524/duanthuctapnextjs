import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Registration ",
  };

export default function RegistrationLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}
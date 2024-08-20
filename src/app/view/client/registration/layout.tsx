import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Registration Page",
  };

export default function RegistrationLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}
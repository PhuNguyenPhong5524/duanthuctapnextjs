import HeadLG from "@/app/component/headlg/head";


export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <HeadLG/>
            {children}
        </section>
    );
}
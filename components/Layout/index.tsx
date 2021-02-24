import Head from "next/head";

export default function Index({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}

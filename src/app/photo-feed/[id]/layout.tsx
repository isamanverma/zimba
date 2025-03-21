import { Metadata } from "next";
import wondersImages from "../wonders";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  const photo = wondersImages.find((p) => p.id === id);

  return {
    title: `${photo?.name} – Zimba`,
    description: `Captured by ${photo?.photographer} in ${photo?.location}.`,
  };
}

export default function PhotoFeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

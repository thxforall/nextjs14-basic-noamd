import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movie',
};

export default function MovieDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);
  return <h1>Movie {id}</h1>;
}

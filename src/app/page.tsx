import Link from 'next/link';

export default function Home(): React.JSX.Element {
  return (
    <main>
      <div>
        Hola mundo
      </div>
      <div>
        <Link href="users">Ver usuarios</Link>
      </div>
    </main>
  );
}

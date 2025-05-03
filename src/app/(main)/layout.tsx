import Link from 'next/link';

interface IProps {
  children: React.ReactNode;
}

export default function UsersLayout({ children }: IProps): React.JSX.Element {
  return (
    <>
      <header className="flex justify-between mb-4 px-8 py-4 bg-white">
        <div>
          LOGO
        </div>
        <div>
          <div>
            <Link href="/users">Usuarios</Link>
          </div>
          <div>
            <Link href="/messages">Mensajes</Link>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
      <div>
        PIE DE PÁGINA MAIN
      </div>
    </>
  )
}
interface IProps {
  children: React.ReactNode;
}

export default function UsersLayout({ children }: IProps): React.JSX.Element {
  return (
    <>
      <div>
        ENCABEZADO MAIN
      </div>
      <main>
        {children}
      </main>
      <div>
        PIE DE PÁGINA MAIN
      </div>
    </>
  )
}
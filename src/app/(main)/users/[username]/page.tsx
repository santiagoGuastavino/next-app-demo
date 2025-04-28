interface IProps {
  params: {
    username: string;
  }
}

export default function UserPage({ params: { username } }: IProps): React.JSX.Element {
  return (
    <div>
      Nombre de usuario: {username}
    </div>
  );
}

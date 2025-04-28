interface IProps {
  params: {
    id: string;
  }
}

export default function MessagePage({ params: { id }}: IProps): React.JSX.Element {
  return (
    <div>
      Message: {id}
    </div>
  );
}

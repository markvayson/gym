type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description }: Props) => {
  return (
    <li className="relative mx-5 inline-block ">
      <div >
        <p className="text-2xl">{name}</p>
      </div>
    </li>
  );
};

export default Class;

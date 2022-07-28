import { Person } from "../../interfaces";

interface CardProps {
  person: Person;
}

const Card = ({ person }: CardProps) => {
  return (
    <div>
      <p>{ person.name} </p>
      <p>{ person.age} </p>
    </div>
  );
};

export default Card;

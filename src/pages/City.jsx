import { useParams } from "react-router";

export default function City() {
  let params = useParams();
  return (
    <div>
      <h3>City</h3>
      <p>{params.city}</p>
    </div>
  );
}

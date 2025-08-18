import { useParams } from "react-router-dom";

export default function EditCreators() {
  const { id } = useParams();

  return (
    <div>
      {id}
    </div>
  )
}
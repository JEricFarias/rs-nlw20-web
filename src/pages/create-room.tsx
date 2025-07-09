import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const rooms: GetRoomsAPIResponse = await response.json();

      return rooms;
    },
  });

  return (
    <div>
      <div>create room</div>

      {isLoading && <p>Carregando...</p>}

      <div className="flex flex-col">
        {data?.map((room) => (
          <Link className="underline" key={room.id} to={`/room/${room.id}`}>
            {room.name}
          </Link>
        ))}
      </div>

      <Link className="underline" to="/room">
        Acessar Sala
      </Link>
    </div>
  );
}

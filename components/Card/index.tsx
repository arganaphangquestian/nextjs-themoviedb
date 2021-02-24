import Link from "next/link";

export default function Card({
  id,
  title,
  image_path,
  release_date,
  vote,
}: {
  id: string;
  title: string;
  image_path: string;
  release_date: string;
  vote: number;
}) {
  return (
    <Link href={`/detail/${id}`}>
      <a className="w-64 m-8 bg-white rounded shadow-md cursor-pointer hover:shadow-xl transition-shadow">
        <div className="h-64 rounded-tr rounded-tl overflow-hidden">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face${image_path}`}
            className="w-64 h-64 object-cover object-bottom"
            alt={title}
          />
        </div>

        <div className="p-5">
          <h1 className="rounded-sm truncate text-xl font-bold mb-4">
            {title}
          </h1>

          <h6 className="truncate">🗓 : {release_date}</h6>
          <span className="truncate">👍🏼 : {vote}</span>
        </div>
      </a>
    </Link>
  );
}

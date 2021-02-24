import Layout from "@/components/Layout";
import { getDetailMovie } from "@/services/getMovies";
import { NextPage } from "next";

interface Props {
  movie?: any;
}
const Detail: NextPage<Props> = ({ movie }) => {
  return (
    <Layout title="Detail" className="h-screen flex">
      <div className="h-auto w-1/4 m-24 flex items-center">
        <div className="relative w-64 h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
          <div className="relative w-64 h-96 bg-white shadow-lg rounded-3xl overflow-hidden">
            <img
              src={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
              className=" w-64 h-96 object-cover object-center"
              alt={movie.title}
            />
          </div>
        </div>
      </div>
      <div className="h-auto w-3/4 m-24 flex items-center">
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <h1 className="rounded-sm truncate text-4xl font-bold mb-8 text-blue-400">
              {movie.title}
            </h1>
            <ul className="list-disc space-y-2">
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-cyan-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <p className="ml-2">
                  Production Companies{` `}
                  {movie.production_companies.map((e: any, key: any) => (
                    <>
                      <code
                        key={key}
                        className="text-sm font-bold text-gray-900 p-2 rounded bg-blue-300"
                      >
                        {e.name}
                      </code>{" "}
                      {` `}
                    </>
                  ))}
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-cyan-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <p className="ml-2">
                  Release date : {` `}
                  <code className="text-sm font-bold p-2 rounded bg-yellow-600 text-white">
                    {movie.release_date}
                  </code>
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-cyan-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <p className="ml-2">Tagline : {movie.tagline}</p>
              </li>
            </ul>
            <blockquote>{movie.overview}</blockquote>
          </div>
          <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>Want to dig deeper into {movie.title}?</p>
            <p>
              <a
                href={movie.homepage}
                target="_blank"
                className="text-cyan-600 hover:text-cyan-700"
              >
                {" "}
                Go to {movie.title} homepage &rarr;{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Detail.getInitialProps = async ({ query }) => {
  const res = await getDetailMovie(`${query.id}`);
  const movie = await res.data;
  return {
    movie,
  };
};
export default Detail;

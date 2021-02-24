import DatePicker from "react-datepicker";
import { getPopularMovies } from "@/services/getMovies";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [startDate, setStartDate] = React.useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = React.useState<Date | undefined>(undefined);
  const [search, setSearch] = React.useState("");
  const [movies, setMovies] = React.useState<[]>([]);
  const [movieCount, setMovieCount] = React.useState(0);

  React.useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    setMovieCount(movieCount + 1);
    let result = await getPopularMovies(movieCount + 1);
    let tmp: any = movies.concat(result.data.results);
    setMovies(tmp);
  };

  return (
    <Layout title="Homepage" className="h-screen">
      <div className="flex justify-center items-center p-16">
        <input
          type="text"
          className="w-8/12 h-16 px-8 bg-gray-200 rounded"
          placeholder="Search . . ."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-row ml-4 items-center">
          <DatePicker
            className="p-1 mr-4 rounded border-2 border-gray-400 cursor-pointer"
            selected={startDate}
            onChange={(date: Date) => {
              console.log(`Start Date ${date}`);
              setStartDate(date);
            }}
            selectsStart
            isClearable
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            className="p-1 rounded border-2 border-gray-400 cursor-pointer"
            selected={endDate}
            onChange={(date: Date) => {
              console.log(`End Date ${date}`);
              setEndDate(date);
            }}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            isClearable
            minDate={startDate}
          />
        </div>
      </div>
      <div>
        <div>
          <InfiniteScroll
            className="w-full mx-auto flex flex-wrap justify-center"
            dataLength={movies.length}
            next={fetchData}
            hasMore={true}
            loader={
              <div className="w-64 m-8 bg-white rounded shadow-md">
                <div className="h-64 bg-gray-200 rounded-tr rounded-tl animate-pulse"></div>

                <div className="p-5">
                  <div className="h-6 rounded-sm bg-gray-200 animate-pulse mb-4"></div>

                  <div className="grid grid-cols-4 gap-1">
                    <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                    <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                    <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                    <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                    <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                    <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                    <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                    <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
              </div>
            }
          >
            {movies
              .filter((e: any) => {
                if (startDate != undefined && endDate != undefined) {
                  return (
                    e.title
                      .toString()
                      .toLowerCase()
                      .includes(search.toLowerCase()) &&
                    new Date(e.release_date) >= startDate &&
                    new Date(e.release_date) <= endDate
                  );
                }
                return e.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((e: any) => (
                <Card
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  image_path={e.poster_path}
                  release_date={e.release_date}
                  vote={e.vote_average}
                />
              ))}
          </InfiniteScroll>
        </div>
      </div>
    </Layout>
  );
}

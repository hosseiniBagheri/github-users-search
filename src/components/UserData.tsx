import { MdLocationOn, MdOutlineWeb } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const MONTHS: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type UserDataProps = {
  avatar_url: string | undefined;
  name: string | undefined;
  created_at: string | undefined;
  login: string | undefined;
  bio: string | undefined;
  public_repos: number | undefined;
  followers: number | undefined;
  following: number | undefined;
  location: string | undefined;
  blog: string | undefined;
  twitter_username: string | undefined;
  html_url: string | undefined;
  email: string | undefined;
};
const UserData = ({
  avatar_url,
  name,
  created_at,
  login,
  bio,
  public_repos,
  followers,
  following,
  location,
  blog,
  twitter_username,
  html_url,
  email,
}: Partial<UserDataProps>) => {
  const dateSort: string[] | undefined = created_at?.split("T")[0].split("-");

  const date: number[] | undefined = dateSort?.map((i) => {
    if (typeof i === "string") {
      return parseInt(i);
    } else {
      return i;
    }
  });

  const month: string | undefined = MONTHS.find((value, index) => {
    return index + 1 === date?.[1];
  });

  const created_date:
    | string
    | undefined = `${date?.[2]}  ${month}  ${date?.[0]}`;

  return (
    <div className="w-full px-5 py-7 flex flex-col items-start md:items-start justify-center md:flex-row">
      <div className="w-full md:w-3/12 h-full">
        <img
          src={avatar_url}
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
      </div>
      <div className="w-full md:w-9/12 px-3">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
            <h2 className="font-bold text-lg text-center text-slate-700 tracking-[1px] mt-3 dark:text-slate-200 md:mt-0 md:text-left">
              {name ? name : login}
            </h2>
            <span className="text-sm text-slate-500">{`Joined ${
              created_date.includes("undefined") ? "24 Aug 2013" : created_date
            }`}</span>
          </div>

          <div className="w-full mt-1 flex flex-col items-center justify-center gap-4 md:items-start ">
            <a
              href={html_url}
              target="_blank"
              className="text-lg md:text-xs text-blue-600 mt-4 md:mt-0"
            >
              {login}
            </a>
            <p className="text-xs md:my-5 dark:text-slate-300 text-center md:text-left">
              {bio}
            </p>
          </div>
        </div>

        <div className="w-full bg-blue-50 rounded-lg px-4 py-6 mt-8 md:mt-0 flex flex-col items-center justify-center md:flex-row md:justify-around dark:bg-blue-200 gap-3 md:gap-0">
          <div className="text-center md:text-left border-b-2 border-blue-500 pb-4 md:border-b-0 md:pb-0">
            <h3 className="text-lg md:text-sm text-slate-700 tracking-[1px]">
              Repos
            </h3>
            <p className="font-semibold text-sm mt-3 text-black">
              {public_repos}
            </p>
          </div>

          <div className="text-center md:text-left border-b-2 border-blue-500 pb-4  md:border-b-0 md:pb-0">
            <h3 className="text-lg md:text-sm text-slate-700 tracking-[1px]">
              Followers
            </h3>
            <p className="font-semibold text-sm mt-3 text-black">{followers}</p>
          </div>

          <div className="text-center md:text-left  border-b-2 border-blue-500 pb-4  md:border-b-0 md:pb-0">
            <h3 className="text-lg md:text-sm text-slate-700 tracking-[1px]">
              Following
            </h3>
            <p className="font-semibold text-sm mt-3 text-black">{following}</p>
          </div>
        </div>

        <div className="w-full pt-5 flex flex-col text-center items-start justify-center md:flex-row md:flex-wrap gap-4 md:gap-0">
          {location && (
            <span className="w-full md:w-6/12 flex flex-col items-center justify-center md:justify-start text-2xl md:text-base gap-2 text-red-600 mt-4">
              <MdLocationOn />
              <span className="text-sm text-slate-900 dark:text-slate-400">
                {location}{" "}
              </span>
            </span>
          )}

          {blog && (
            <span className="w-full md:w-6/12 flex flex-col text-center items-center justify-center  text-2xl md:text-base md:justify-start gap-2 text-slate-400 mt-4">
              <MdOutlineWeb />
              <a
                href={blog}
                className="text-sm text-blue-600 dark:text-slate-400"
              >
                {blog}
              </a>
            </span>
          )}

          {twitter_username && (
            <span className="w-full md:w-6/12 flex flex-col text-center items-center justify-center  text-2xl md:text-base md:justify-start gap-2 mt-4 text-blue-600">
              <FaTwitter />
              <span className="text-sm text-slate-900  dark:text-slate-400">
                {twitter_username}
              </span>
            </span>
          )}

          {email && (
            <span className="w-full md:w-6/12 flex flex-col text-center items-center justify-center  text-2xl md:text-base md:justify-start gap-2 text-green-600 mt-4">
              <HiOutlineMail />
              <span className="text-sm text-slate-900  dark:text-slate-400 leading-6">
                {email}
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserData;

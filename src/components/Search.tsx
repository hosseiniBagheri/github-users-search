import { FiSearch } from "react-icons/fi";

type SearchProps = {
  submitFormHandler: () => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const Search = ({
  submitFormHandler,
  searchValue,
  setSearchValue,
}: SearchProps) => {
  return (
    <div className="w-full transition-all px-4 py-2 flex items-center justify-center gap-4 ">
      <span className="text-2xl text-blue-500">
        <FiSearch />
      </span>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search username"
        className="w-10/12 outline-none rounded-md py-1 px-3 focus:ring-2 placeholder:text-sm dark:bg-slate-800 dark:text-slate-400"
      />
      <button
        onClick={submitFormHandler}
        className="bg-blue-500 text-white rounded-md py-2 px-3 dark:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default Search;

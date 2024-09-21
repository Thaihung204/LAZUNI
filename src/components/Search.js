import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = () => {
  return (
    <>
      <form
        className="bg-primary rounded-[50px]  sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center"
        onSubmit={(e) => e.preventDefault()}  // Prevent form submission for now
      >
        <input
          type="text"
          name="keyword"
          placeholder="Tìm kiếm..."
          className="order-2 flex-1 outline-none bg-transparent text-white text-[16px] font-[600] focus:ring-2 focus:ring-blue-500"
          aria-label="Search"
        />
        <button
          type="submit"
          className="text-white order-1 text-[22px] mr-[20px]"
          aria-label="Search button"
        >
          <FaMagnifyingGlass />
        </button>
      </form>
    </>
  );
};

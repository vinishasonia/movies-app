import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

type PaginationProps = {
  handlePrev: () => void;
  handleNext: () => void;
  pageNo: number;
};

function Pagination({ handlePrev, handleNext, pageNo }: PaginationProps) {
  return (
    <>
      <div className="bg-gray-400 p-4 mt-8 flex justify-center">
        <div onClick={handlePrev} className=" px-8 hover:cursor-pointer">
          <FaArrowLeftLong />
        </div>
        <div className="font-bold">{pageNo}</div>
        <div onClick={handleNext} className="px-8 hover:cursor-pointer">
          <FaArrowRight />
        </div>
      </div>
    </>
  );
}

export default Pagination;

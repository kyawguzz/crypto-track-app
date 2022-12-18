import React, { useContext, useRef } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";
import submitIcon from "../assets/submit-icon.svg";

const PerPage = () => {
  const inputRef = useRef(null);
  const { setPerPage } = useContext(CryptoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
      setPerPage(val);
      inputRef.current.value = val;
    }
  };
  return (
    <form
      className="relative flex items-center font-nunito mr-12 "
      onSubmit={handleSubmit}
    >
      <label
        className="relative flex justify-center items-center mr-2 font-bold"
        htmlFor="perpage"
      >
        perpage:{" "}
      </label>
      <input
        ref={inputRef}
        type="number"
        min={1}
        max={250}
        name="perpage"
        placeholder="10"
        className="w-10 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border-transparent focus:border-cyan leading-4"
      />
      <button type="submit" className="ml-1 cursor-pointer">
        <img src={submitIcon} alt="submit" className="w-full h-auto" />
      </button>
    </form>
  );
};

const Pagination = () => {
  let { page, setPage, totalPages, perPage, cryptoData } =
    useContext(CryptoContext);

  const TotalNumber = Math.ceil(totalPages / perPage);

  const next = () => {
    if (page === TotalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber - 1);
    } else {
      setPage(TotalNumber + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= TotalNumber) {
      setPage(TotalNumber + 1);
    } else {
      setPage(TotalNumber - 2);
    }
  };

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex items-center ">
        <PerPage />
        <ul className="flex items-center justify-end text-s ">
          <li className="flex items-center">
            <button className="outline-0 hover:text-cyan w-8" onClick={prev}>
              <img
                src={paginationArrow}
                alt="left"
                className="w-[50%] h-auto rotate-180"
              />
            </button>
          </li>
          {page + 1 === TotalNumber || page === TotalNumber ? (
            <li>
              <button
                onClick={multiStepPrev}
                className="outline-0 hover:text-cyan rounded-full w-5 h-5 flex items-center justify-center text-sm"
              >
                ...
              </button>
            </li>
          ) : null}
          {page - 1 !== 0 ? (
            <li>
              {""}
              <button
                onClick={prev}
                className="outline-0 hover:text-cyan rounded-full w-5 h-5 flex items-center justify-center bg-gray-200 mx-1.5"
              >
                {page - 1}
              </button>
            </li>
          ) : null}
          <li>
            <button
              disabled
              className="outline-0 rounded-full w-5 h-5 flex items-center justify-center bg-cyan text-gray-300 mx-1.5"
            >
              {page}
            </button>
          </li>
          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              <button
                onClick={next}
                className="outline-0 hover:text-cyan rounded-full w-5 h-5 flex items-center justify-center bg-gray-200 mx-1.5"
              >
                {page + 1}
              </button>
            </li>
          ) : null}
          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              {""}
              <button
                onClick={multiStepNext}
                className="outline-0 hover:text-cyan rounded-full w-5 h-5 flex items-center justify-center text-sm"
              >
                ...
              </button>
            </li>
          ) : null}
          {page !== TotalNumber ? (
            <li>
              <button
                onClick={() => setPage(TotalNumber)}
                className="outline-0 hover:text-cyan rounded-full w-8 h-5 flex items-center justify-center bg-gray-200 mx-1.5"
              >
                {TotalNumber}
              </button>
            </li>
          ) : null}
          <li>
            <button className="outline-0 hover:text-cyan w-8" onClick={next}>
              <img
                src={paginationArrow}
                alt="right"
                className="w-[50%] h-auto"
              />
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;

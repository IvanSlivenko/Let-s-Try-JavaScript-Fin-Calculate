import { useState, type FC } from "react";
import { FaPlus } from "react-icons/fa";
import { Form, useLoaderData } from "react-router-dom";
import type { IResponseTransactionLoader } from "../types/types";
import CategoryModal from "./CategoryModal";

const TransactionForm: FC = () => {
  const { categories } = useLoaderData() as IResponseTransactionLoader;
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  
  return (
    <div className="rounded-md bg-slate-800 p-4">
      <Form
        className="grid gap-2"
        method="post"
        action="/transactions"
      >
        <label className="grid" htmlFor="title">
          <span>Title</span>
          <input
            className="input "
            type="text"
            placeholder="Title..."
            name="title"
            required
          />
        </label>

        <label className="grid" htmlFor="amount">
          <span>Amount</span>
          <input
            className="input "
            type="number"
            placeholder="Amount..."
            name="amount"
            required
          />
        </label>

        <h1>SELECT</h1>
        {/* Select */}
        {categories.length ? (
          <label htmlFor="category" className="grid">
            <span>Category</span>
            <select name="category" required className="input">
              {categories.map((ctg, idx) => (
                <option key={idx} value={ctg.id}>
                  {ctg.title}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <h1 className="mt-1 text-red-300">
            To continue create a category first
          </h1>
        )}
        {/* Add Category */}
        <button
          onClick={() => setVisibleModal(true)}
          className="max-w-fit flex items-center gap-2 text-white/50 hover:text-white"
        >
          <FaPlus />
          <span>Manage Categories: </span>
        </button>
        {/* Radio buttons */}
        <div className="flex gap-4 items-center ">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value={"income"}
              className="form-radio text-blue-600"
            />
            <span>Income</span>
          </label>

          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value={"expense"}
              className="form-radio text-blue-600"
            />
            <span>Expense</span>
          </label>
        </div>

        {/* Submit button */}
        <button className="btn btn-green  max-w-fit mt-2">Submit</button>
      </Form>

      {visibleModal && (
        <CategoryModal type="post" setVisibleModal={setVisibleModal} />
      )}
    </div>
  );
};

export default TransactionForm;

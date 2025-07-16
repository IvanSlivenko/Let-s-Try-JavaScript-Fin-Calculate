import { type FC } from "react";
import { FaPlus } from "react-icons/fa";
import { Form } from "react-router-dom";

const TransactionForm: FC = () => {
  return (
    <div className="rounded-md bg-slate-800 p-4">
      <Form className="grid gap-2" method="post" action="/transactions">
        
        <label className='grid' htmlFor="title">
          <span>Title</span>
          <input
            className="input "
            type="text"
            placeholder="Title..."
            name="title"
            required
          />
        </label>

        <label className='grid' htmlFor="amount">
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
        <button
                  onClick={() => {}}
                  className="max-w-fit flex items-center gap-2 text-white/50  mt-5 hover:text-white"
                >
                  <FaPlus />
                  <span>Manage Categories: </span>
                </button>
    {/* Radio buttons */}
    <div className="flex gap-4 items-center ">
        
        <label className="cursor-pointer flex items-center gap-2">
            <input type="radio" name='type' value={'income'} className="form-radio text-blue-600" />
            <span>Income</span>
        </label>
        
        <label className="cursor-pointer flex items-center gap-2">
            <input type="radio" name='type' value={'expense'} className="form-radio text-blue-600" />
            <span>Expense</span>
        </label>

    </div>
      </Form>
    </div>
  );
};

export default TransactionForm;

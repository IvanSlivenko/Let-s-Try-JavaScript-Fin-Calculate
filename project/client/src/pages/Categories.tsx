import { useState, type FC } from "react";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Form, useLoaderData } from "react-router-dom";
import CategoryModal from "../components/CategoryModal";
import { instance } from "../api/axios.api";
import type { ICategory } from "../types/types";

export const categoriesAction = async ({ request }: any) => {
  switch (request.method) {
    case "POST": {
      const formData = await request.formData();
      const title = {
        title: formData.get("title"),
      };
      // console.log("formData", formData);
      // console.log("title", title);
      await instance.post("/categories", title);
      return null;
    }

    case "PATCH": {
      const formData = await request.formData();
      // const categoryId = formData.get("id");
      const category = {
        id: formData.get('id'),
        title: formData.get('title')
      }
      await instance.patch(`/categories/category/${category.id}`, category)
      return null;
    }
    case "DELETE": {
      const formData = await request.formData();
      const categoryId = formData.get("id");
      await instance.delete(`/categories/category/${categoryId}`)
      // console.log('categoryId',categoryId)
    }
  }
};

export const categoryLoader = async () => {
  const { data } = await instance.get<ICategory[]>("/categories");
  // console.log('data', data)
  return data;
};

const Categories: FC = () => {
  const categories = useLoaderData() as ICategory[];
  
  const [categoryId, setCategoryId] = useState<number>(0);
  
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <>
      <div className="mt-10 p-4 rounded-md bg-slate-800  ">
        <h1> Your category list: </h1>
        {/* Category List */}
        <div className="flex mt-2 items-center gap-2 flex-wrap ">
          {categories.map((category, idx) => (
            <div
              key={category.id}
              className="group py-2 px-4 rounded-lg bg-blue-600 flex items-center relative gap-2"
            >
              {category.title}
              <div className="absolute hidden px-3 left-0 top-0 bottom-0 right-0 rounded-lg bg-black/90 items-center justify-between group-hover:flex">
                <button onClick={()=>{
                  setCategoryId(category.id)
                  setVisibleModal(true)
                  setIsEdit(true)
                }}>
                  <AiFillEdit />
                </button>
                <Form
                  className="flex "
                  method="delete"
                  // action="/categories"
                >
                  <input type="hidden" name="id" value={category.id} />
                  <button type="submit">
                    <AiFillCloseCircle />
                  </button>
                </Form>
              </div>
            </div>
          ))}
        </div>

        {/* Add Category */}
        <button
          onClick={() => setVisibleModal(true)}
          className="max-w-fit flex items-center gap-2 text-white/50  mt-5 hover:text-white"
        >
          <FaPlus />
          <span>Create a new category</span>
        </button>
      </div>
      {/* Add Category Modal */}
      {visibleModal && (
        <CategoryModal type="post" setVisibleModal={setVisibleModal} />
      )}

      {/* Edit Category Modal */}
      {visibleModal && isEdit && (
        <CategoryModal type="patch" id={categoryId} setVisibleModal={setVisibleModal} />
      )}
    </>
  );
};

export default Categories;

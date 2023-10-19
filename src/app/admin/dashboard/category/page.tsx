import AddProductButton from "@/components/dashboard/category/AddProductButton";
import CreateCategoryModal from "@/components/dashboard/category/CreateCategoryModal";

const Category = () => {
  return (
    <>
      <div className="sidebar-height w-full px-5">
        <div className=" flex items-center justify-between p-2">
          <h1 className="text-xl font-semibold tracking-wide capitalize">
            Category
          </h1>
          <AddProductButton />
        </div>
      </div>

      <CreateCategoryModal />
    </>
  );
};

export default Category;

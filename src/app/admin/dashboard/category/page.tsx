import AddProductButton from "@/components/dashboard/category/AddProductButton";
import CategoryList from "@/components/dashboard/category/CategoryList";
import CreateCategoryModal from "@/components/dashboard/category/CreateCategoryModal";

const Category = () => {
  return (
    <>
      <div className="sidebar-height w-full px-5">
        <div className=" flex items-center justify-between px-2 py-4">
          <h1 className="text-xl font-semibold tracking-wide capitalize">
            Category
          </h1>
          <AddProductButton />
        </div>
        <CategoryList />
      </div>

      <CreateCategoryModal />
    </>
  );
};

export default Category;

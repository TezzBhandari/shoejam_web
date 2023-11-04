import axios from "axios";
import CategoryTable from "./CategoryTable";

export interface Category {
  id: string;
  category_name: string;
  category_slug: string;
  parent_category_id: string | null;
  parent_category_name: string | null;
  category_level: number;
  category_path: string;
}

export interface CategoryResponse {
  status: string;
  data: { categories: Array<Category> | null };
  errors: Array<{ message: string; property: string }> | null;
}

const getCategories = async () => {
  const response = await axios.get<CategoryResponse>(
    "http://localhost:3001/api/v1/admin/product-inventory/category"
  );
  5;
  return response.data;
};

const CategoryList = async () => {
  const { status, data, errors } = await getCategories();

  let tableData: Array<Category> = [];
  if (data.categories !== null) {
    tableData = data.categories;
  }

  return (
    <div className="wrapper p-2">
      <CategoryTable tableData={tableData} />
    </div>
  );
};

export default CategoryList;

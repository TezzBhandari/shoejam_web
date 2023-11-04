import axios from "axios";

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

  //   console.log("categories: \n", data?.data);
  const categories = data.categories;

  return (
    <div className="wrapper">
      <ul>
        {categories !== null ? (
          categories.map((category) => {
            return <li key={category.id}>{category.category_name}</li>;
          })
        ) : (
          <li>category not available</li>
        )}
      </ul>
    </div>
  );
};

export default CategoryList;

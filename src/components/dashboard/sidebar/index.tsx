import Link from "next/link";
import { type IconType } from "react-icons";
import { AiFillHome, AiFillTag } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { HiClipboardList } from "react-icons/hi";

interface LinkItem {
  id: number;
  Icon: IconType;
  linkName: string;
  reference: string;
}

const LinkItems: LinkItem[] = [
  {
    id: 1,
    Icon: AiFillHome,
    linkName: "Home",
    reference: "/admin/dashboard",
  },
  {
    id: 2,
    Icon: HiClipboardList,
    linkName: "Orders",
    reference: "/admin/dashboard/orders",
  },
  {
    id: 3,
    Icon: AiFillTag,
    linkName: "Product",
    reference: "/admin/dashboard/product",
  },
  {
    id: 4,
    Icon: BiSolidCategory,
    linkName: "Category",
    reference: "/admin/dashboard/category",
  },
];

const Sidebar = () => {
  return (
    <nav className="md:flex md:flex-col sidebar-height top-16 fixed left-0 z-50 justify-between hidden w-1/6 p-4 overflow-hidden border-2 border-red-600">
      <div className="">
        <ul>
          {LinkItems.map(({ id, Icon, linkName, reference }) => {
            return (
              <li key={id}>
                <div className="">
                  <Link
                    href={reference}
                    className=" flex items-center space-x-2 text-[#303030] text-sm font-semibold tracking-wide capitalize  hover:bg-white py-1 px-2.5 rounded-lg"
                  >
                    <span>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span>{linkName}</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        {/* {[, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          (v, i) => {
            return <div key={i}>Setting</div>;
          }
        )} */}
        <button>Settings</button>
      </div>
    </nav>
  );
};

export default Sidebar;

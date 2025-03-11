import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="">
      <Link to="/">YUSHU&apos;S PIZZA CO.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;

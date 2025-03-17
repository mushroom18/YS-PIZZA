import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

/*
params 对象是 React Router 提供的一个专有对象，用于包含当前路由的动态参数。
它在处理路由时非常有用，特别是在需要根据 URL 中的参数来获取或操作数据的情况下。
可以在 loader、action 函数中以及使用 useParams 钩子来访问 params 对象。
*/

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

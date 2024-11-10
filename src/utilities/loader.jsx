import { base_url, fetch_url, header } from "./dataPanel";

// /getall?erp_url=erp_url&doctype_name=doctype_name
export const loader = async () => {
 
  const groupsData = await fetch(
    `${fetch_url}/getall?erp_url=${base_url}&doctype_name=Item Group`,
    {
      method: "GET",
      headers: header,
    }
  );
  const groups = await groupsData.json();

  // console.log("groups", groups);

  const itemsData = await fetch(
    `${fetch_url}/getall?erp_url=${base_url}&doctype_name=Website Item`,
    {
      method: "GET",
      headers: header,
    }
  );
  const webItems = await itemsData.json();

  // console.log(webItems);

  const itmRate = await fetch(
    `${fetch_url}/getall?erp_url=${base_url}&doctype_name=Item`,
    {
      method: "GET",
      headers: header,
    }
  );
  const items = await itmRate.json();

  // console.log(items);

  return { groups, webItems, items };
};

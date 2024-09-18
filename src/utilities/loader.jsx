import { fetch_url, header } from "./dataPanel";

export const loader = async () => {
  const groupsData = await fetch(
    `${fetch_url}/gets/Item Group?filters=[["show_in_website", "=", 1]]&fields=["route","name", "image","is_group", "parent_item_group"]`,
    {
      method: "GET",
      headers: header,
    }
  );
  const groups = await groupsData.json();

  const itemsData = await fetch(
    `${fetch_url}/gets/Website Item?filters=[["published", "=", 1]]&fields=["*"]`,
    {
      method: "GET",
      headers: header,
    }
  );
  const webItems = await itemsData.json();

  const itmRate = await fetch(
    `${fetch_url}/gets/Item?filters=[["published_in_website", "=", 1]]&fields=["*"]`,
    {
      method: "GET",
      headers: header,
    }
  );
  const items = await itmRate.json();

  return { groups, webItems, items };
};

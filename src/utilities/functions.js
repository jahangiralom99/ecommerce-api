import { toast } from "react-toastify";
import { fetch_url, header } from "./dataPanel";

let formatDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");

  let formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const addToCart = (newItem) => {
  const currentCart =
    JSON.parse(localStorage.getItem(`${window.location.hostname}-cart`)) || [];
  const existing = currentCart.findIndex(
    (item) => item.item_code === newItem.item_code
  );
  if (existing !== -1) {
    currentCart[existing].qty += 1;
    localStorage.setItem(
      `${window.location.hostname}-cart`,
      JSON.stringify(currentCart)
    );
    return false;
  } else {
    currentCart.push(newItem);
    localStorage.setItem(
      `${window.location.hostname}-cart`,
      JSON.stringify(currentCart)
    );
    return true;
  }
};

const putCartDB = async (user, item) => {
  const addItem = {
    custom_cart: JSON.stringify(item),
  };
  try {
    const response = await fetch(`${fetch_url}/puts/Customer/${user}`, {
      method: "PUT",
      body: JSON.stringify(addItem),
      headers: header,
    });
    const result = await response.json();
    return !!result.custom_cart;
  } catch (error) {
    console.error("Error updating cart data:", error);
    return false;
  }
};

const addToProceed = (newItem, store) => {
  localStorage.removeItem(`${window.location.hostname}-${store}`);
  localStorage.setItem(
    `${window.location.hostname}-${store}`,
    JSON.stringify(newItem)
  );
  return true;
};

const getStrdCart = (store) => {
  let strCart = [];
  const storedCart = localStorage.getItem(
    `${window.location.hostname}-${store}`
  );
  if (storedCart) {
    strCart = JSON.parse(storedCart);
  }
  return strCart;
};

const removeToCart = (key) => {
  let newCart = getStrdCart("cart");
  if (Array.isArray(newCart)) {
    newCart[key] = null;
    newCart = newCart.filter((item) => item !== null);
  } else {
    delete newCart[key];
  }

  localStorage.setItem(
    `${window.location.hostname}-cart`,
    JSON.stringify(newCart)
  );
  toast("Item Deleted");
};

const getUser = (mail, pass) => {
  return fetch(
    `${fetch_url}/gets/Customer?filters=[["email_id", "=", "${mail}"]]&fields=["*"]`,
    {
      headers: header,
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      let dbPass;
      if (result.length == 1) {
        dbPass = atob(decodeURIComponent(result[0]?.custom_password));
      }
      if (dbPass == pass) {
        return result[0];
      } else {
        return false;
      }
    });
};

const postData = async (body) => {
  try {
    const response = await fetch(`${fetch_url}/post_data`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    return result || false;
  } catch (error) {
    console.error("Error posting data:", error);
    return false;
  }
};

// clear card
const clearStoredCart = (store) => {
  localStorage.removeItem(`${window.location.hostname}-${store}`);
};

export {
  formatDate,
  addToCart,
  putCartDB,
  addToProceed,
  removeToCart,
  getStrdCart,
  getUser,
  postData,
  clearStoredCart,
  // getPhoneNumber
};

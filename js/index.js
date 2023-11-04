const url = `https://admin-dashboard-json-server-sabiransari1.onrender.com`;

const paramObj = {
  _limit: 10,
  _page: 1,
};

const queryParams = new URLSearchParams(paramObj);

const getData = async (url, queryParams) => {
  try {
    let res = await fetch(`${url}/products?${queryParams}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });

    let data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData(url, queryParams);

// post method
let post = {
  img: 'Ava Addams',
  name: 'Ava Addams',
  description: 'Ava Addams',
  gender: 'Ava Addams',
  category: 'Ava Addams',
  price: 0,
};

const postProduct = async (url, post) => {
  try {
    let res = await fetch(`${url}/products`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    let data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// postProduct(url, post);

// patch method
const patchId = ``;

let patch = {
  img: 'Cathy Heaven',
  name: 'Cathy Heaven',
  description: 'Cathy Heaven',
  gender: 'Cathy Heaven',
  category: 'Cathy Heaven',
  price: 0,
};

const patchProduct = async (url, patchId, patch) => {
  try {
    let res = await fetch(`${url}/products/${patchId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(patch),
    });

    let data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// patchProduct(url, patchId, patch);

// delete method
const deleteId = ``;

const deleteProduct = async (url, deleteId) => {
  try {
    let res = await fetch(`${url}/products/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });

    let data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// deleteProduct(url, deleteId);

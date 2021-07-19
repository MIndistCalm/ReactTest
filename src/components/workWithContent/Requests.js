const header = {
  "YT-AUTH-TOKEN": "YourTar 878b9c2d1b9eb1e5cbb140b2cf756ae323ad91ac0aba06a5d66652af77cfa5c7eb247d7be0c86c02557b6bb0f0f7f139abadd76df4a23be3f17f2ffc15806226",
  "Content-Type": "application/json"
}

export const getItem = async (url) => {
  let item;
  await fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      item = data
      return data
    })
  return item
};

export const postItem = async (url, data) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    //make sure to serialize your JSON body
    headers: header
  })
    .then(response => {
      response.json()
    })
    .then(body => {
      console.log(body)
    });
}

export const putItem = async (url, data) => {
  await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    //make sure to serialize your JSON body
    headers: header
  })
    .then(response => {
      response.json()
    })
    .then(body => {
      console.log(body)
    });
}

export const deleteItem = async (url, id) => {
  await fetch(url + id, {
    method: 'DELETE',
    headers: header
  })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
}
export const getUserList = (setAllUser) => {
    fetch('http://localhost:8080/admin/listuser')
      .then((response) => response.json())
      .then((expense_data) => setAllUser(expense_data.data));
}
export const getProductList = (setAllProduct) => {
    fetch('http://localhost:8080/listproducts')
      .then((response) => response.json())
      .then((expense_data) => setAllProduct(expense_data.data));
}
export const getMyCart = (setMyCart) => {
    fetch('http://localhost:8080/mycart')
      .then((response) => response.json())
      .then((expense_data) => setMyCart(expense_data.data));
}
export const getAllOrders = (setAllOrders) => {
    fetch('http://localhost:8080/admin/listorder')
      .then((response) => response.json())
      .then((expense_data) => setAllOrders(expense_data.data));
}



export const addOrder = async(postData = {},setAddOrder)=>{
    console.log(postData);
    const res = await fetch("http://localhost:8080/addtocart", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setAddOrder(jsonData);
}

export const listMyCart = async(postData = {},setMyCart)=>{
    console.log(postData);
    const res = await fetch("http://localhost:8080/user/listmycart", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyCart(jsonData);
} 

export const listMyOrder = async(postData = {},setMyOrder)=>{
    console.log(postData);
    const res = await fetch("http://localhost:8080/user/listmyorder", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyOrder(jsonData);
} 


export const deleteProduct = async(postData = {}) =>{
    console.log(postData);
    const res = await fetch("http://localhost:8080/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const updateProduct = async(postData = {}) =>{
    console.log(postData);
    const res = await fetch("http://localhost:8080/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const placeOrder = async(postData = {}) =>{
    console.log(postData);
    const res = await fetch("http://localhost:8080/user/placeorder", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


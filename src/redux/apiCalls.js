import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethod";
import { TOKEN_KEY } from "../requestMethod";
import { clearCart, removeProduct, setCart } from "./cartRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
        console.log("res", res.data);
        localStorage.setItem(TOKEN_KEY, res.data.accessToken)
    } catch {
        dispatch(loginFailure())
    }
}
export const register = (userData) => async (dispatch) => {
    try {
      dispatch(registerStart());
      const res = await publicRequest.post('/auth/register', userData);
      dispatch(registerSuccess(res.data));
      localStorage.setItem(TOKEN_KEY, res.data.accessToken)
    } catch (error) {
      dispatch(registerFailure(error.res.data.message));
    }
};


export const getCart = async (dispatch, id) => {
    try {
        const res = await userRequest.get(`/carts/find/${id}`);
        console.log('res get cart', res.data);
        dispatch(setCart(res?.data?.products ?? []));
    } catch (err) {
        console.log(err);
    }
}

export const deleteProductInCart = async (dispatch, userId, product) => {
    try {
        const res = await userRequest.put(`/carts/delete/${userId}`, {
            id: product?._id
        });
        console.log('res', res.data);
        dispatch(removeProduct(product));
    } catch (err) {
        console.log(err);
    }
}



export const addProductToCart = async (dispatch, userId, product) => {
    try {
        // body : {
        //     "userId": "65c1f609646f7cf4465c4899",
        //     "products": [
        //         {
        //             "productId": "65c250d11ded8fe13c7b5d94",
        //             "quantity": 2,
        //             "colorCart": "black",
        //             "sizeCart": "XL"
        //         }
        //     ]
        // }
        const res = await userRequest.post(`/carts`, {
            userId: userId,
            products: [
                {
                    productId: product._id,
                    quantity: product.quantity,
                    colorCart: product.color,
                    sizeCart: product.size
                }
            ]
        });
        getCart(dispatch,userId)
        
    } catch (err) {
        console.log(err);
    }
}

export const resetCart = async (dispatch, userId) => {
    try {
            
        const res = await userRequest.put(`/carts/clear/${userId}`);
        dispatch(clearCart());
        console.log('res clear cart', res);
    } catch (err) {
        console.log(err);
    }
}

export const createOrder = async (data) => {
    try {
        // body : 
            // {
            //     "userId": "65c1f8c4efb55f7d09ea76bc",
            //     "products": [
            //         {
            //             "productId": "65c250d11ded8fe13c7b5d94",
            //             "quantityOrder": 2,
            //             "colorOrder": "blue",
            //             "sizeOrder": "M"
            //         }
                    
            //     ],
            //     "amount": 300,
            //     "address":"Hải Dương",
            //     "name":"Thu Thuỷ",
            //     "note": "Giao hàng ",
            //     "phone": "098374626"
            // }            
        const res = await userRequest.post(`/orders`, data);
        console.log('res', res);
        
    } catch (err) {
        console.log(err);
    }
}

export const searchOrder = async (userId,data) => {
    try {
        // body : 
        // {
        //     "status": "1"
        //  }
          
        const res = await userRequest.post(`/orders/find/${userId}`, data);
        console.log('res?.data?.data?.products',res?.data?.data);
        return res?.data?.data
        
    } catch (err) {
        console.log(err);
        return []
    }
}
// import React from 'react'
import "./Cart.scss"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined } from '@ant-design/icons';
import { deleteProductInCart } from "../../redux/apiCalls";
import { useState } from "react";
import {message, Modal } from 'antd';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const currentUser = useSelector((state) =>state.user.currentUser);
    const [deletedProductInCart, setDeletedProductInCart] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // const handleDelete = (product) => {
    //     deleteProductInCart(dispatch, currentUser._id,product)
    // }
    const showModal = () => {
        setIsModalVisible(true);
      };


      const handleDelete = (product) => {
        // Lưu sản phẩm cần xóa vào state hoặc props để sử dụng trong hàm xác nhận xóa
        setDeletedProductInCart(product);
        showModal();
      };

      const handleDeleteConfirmed = () => {
        if (deletedProductInCart) {
          deleteProductInCart(dispatch, currentUser._id, deletedProductInCart);
          setDeletedProductInCart(null);
          setIsModalVisible(false);
          message.success('Xoá sản phẩm thành công.');
        }
      };
      const handleDeleteCancelled = () => {
        setIsModalVisible(false);
        setDeletedProductInCart(null);
      };
    return (
        <div className='cart'>
            <div className="wrapper">
                <h1>YOUR BAG</h1>
                <div className="top">
                    <Link to='/'>
                        <button className="top-but-shop">COUNTINUE SHOPPING</button>
                    </Link>
                    <div className="top-ps">
                        <div className="top-p">
                            Shopping Bag(2)
                        </div>
                        <div className="top-p">
                            Your Wishlist(0)
                        </div>
                    </div>

                    <button className="top-but-check">CHECKOUT NOW</button>

                </div>
                <div className="bottom">
                    <div className="info">
                        {cart.product.map(product => (
                            <div key={product._id} className="info-product">
                                <div className="product-cart">
                                    <img className="product-img-cart" src={`${product.productId.img}`} alt="" />
                                    <div className="details">
                                        <div className="details-name"><b>Product: </b> {product.productId.title}</div>
                                        <div className="details-id"><b>ID: </b>{product.productId._id}</div>
                                        <div className="FilterColor" color={product.colorCart}></div>
                                        <div className="details-size"><b>Size  </b>{product.sizeCart}</div>
                                    </div>
                                </div>
                                <div className="price">
                                    <DeleteOutlined className='userListIcon' onClick={() => handleDelete(product)} />
                                    <div className="count">
                                        
                                        <p className="number">{product.quantity}</p>
                                        
                                    </div>
                                    <div className="bottom-price">
                                        $ {product.productId.price * product.quantity}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr className="hr" />

                    </div>
                    <div className="summary">
                        <h1 className="summary-title">ORDER SUMMARY</h1>
                        <div className="summary-info">
                            <div className="info-name">Subtotal</div>
                            <div className="info-price">$ {cart.total}</div>
                        </div>
                        <div className="summary-info">
                            <div className="info-name">EStimatals Shipping</div>
                            <div className="info-price">$5.90</div>
                        </div>
                        <div className="summary-info">
                            <div className="info-name">Shipping Discount</div>
                            <div className="info-price">- $5.90</div>
                        </div>
                        <div className="summary-info-total">
                            <div className="info-name">Total</div>
                            <div className="info-price">$ {cart.total}</div>
                        </div>
                        <Link to='/order'>
                            <button className="button-cart">Đặt hàng</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Modal
        title='Xoá sản phẩm ở giỏ hàng'
        visible={isModalVisible}
        onOk={handleDeleteConfirmed}
        onCancel={handleDeleteCancelled}
      >
        <p>Bạn có chắc chắn muốn xoá sản phầm này?</p>
      </Modal>

        </div>
    )
}

export default Cart
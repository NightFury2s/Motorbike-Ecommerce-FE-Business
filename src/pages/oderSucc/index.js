import InfomationCard from '@/components/InfomationCard';
import { useEffect, useRef, useState } from 'react';
import { paymentSuccess } from '../api/api';

function OderSucc() {
    const [totalPrice, setTotalPrice] = useState('');
    const [dataProduct, setDataProduct] = useState([]);

    //mac dinh
    useEffect(() => {
        paymentSuccess().then((data) => {
            setDataProduct(data?.shoppingCartDetailsDto);
            setTotalPrice(data?.totalPrice);
        });
    }, []);

    return (
        <div className="oder-succ">
            <div className="ProductPage-name">
                <h6
                    style={{
                        position: 'absolute',
                        zIndex: '1',
                        backgroundColor: '#d9d9d9',
                        padding: '0px 20px',
                    }}
                >
                    Thanh toán
                </h6>
                <div className="ProductPage-line"></div>
            </div>
            <div className="oder-succ-container">
                <h3 className="oder-succ-container-name"> Đặt hàng thành công </h3>

                <div className="oder-succ-container-body">
                    <p className="oder-succ-container-body-name">Đơn đặt hàng của bạn gồm:</p>

                    <div className="hiden">
                        {dataProduct &&
                            dataProduct?.map((e) => {
                                return <InfomationCard product={e} />;
                            })}
                    </div>

                    <div className="oder-succ-container-body-pay">
                        <div className="oder-succ-container-body-pay-total">
                            <p className="oder-succ-container-body-pay-total-name">Tổng giá tiền</p>
                            <p className="oder-succ-container-body-pay-total-name oder-succ-container-body-pay-total-price">
                                {totalPrice && totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND
                            </p>
                        </div>

                        <div className="oder-succ-container-body-pay-total">
                            <p className="oder-succ-container-body-pay-total-name">Phương thức thanh toán</p>
                            <p className="oder-succ-container-body-pay-total-name">Thanh toán tại shop</p>
                        </div>
                    </div>

                    <p className="oder-succ-container-body-footer">
                        Cảm ơn anh chị đã mua hàng tại: Motobike Ecommerce. Anh chị vui lòng đến cửa hàng nhận xe và
                        thanh toán nhé.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OderSucc;

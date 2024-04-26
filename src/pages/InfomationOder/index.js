import InfomationCard from "@/components/InfomationCard";
import { FaAddressCard } from "react-icons/fa";
import { getByCartUserPayment } from "../api/api";
import { useEffect, useState } from "react";
import Link from "next/link";

function InfomationOder() {
  const [dataProduct, setDataProduct] = useState([]);
  const [user, setUser] = useState({});
  const [totalPrice, setTotalPrice] = useState('')

  // mac dinh 
  useEffect(() => {
    getByCartUserPayment().then((data) => {
      setDataProduct(data?.shoppingCartDetailsDto);
      setTotalPrice(data?.totalPrice);
    })
  }, []);


  return (
    <div className="informationOder">
      <div className="ProductPage-name">
        <h6
          style={{
            position: "absolute",
            zIndex: "1",
            backgroundColor: "#d9d9d9",
            padding: "0px 20px",
          }}
        >
          Thanh toán
        </h6>
        <div className="ProductPage-line"></div>
      </div>

      <div className="informationOder-infor-container">
        <div className="informationOder-infor-container-head">
          <FaAddressCard style={{ fontSize: "30px" }} />
          <h3 style={{ paddingLeft: "8px", fontWeight: "800" }}>
            Thông tin khách hàng{" "}
          </h3>
        </div>

        <div className="informationOder-infor-container-body">
          <p className="informationOder-infor-container-body-name">
            {user.fullName}
          </p>
          <p className="informationOder-infor-container-body-name">
            {user.phoneNumber}
          </p>
          <p className="informationOder-infor-container-body-name">
            {user.email}
          </p>
          <p className="informationOder-infor-container-body-name">
            {user.address}
          </p>
        </div>
      </div>

      <div className="informationOder-product-container">

        <div className="hiden" >
          {dataProduct?.map((e) => {
            return <InfomationCard product={e} />
          })}

        </div>


        <div className="informationOder-product-container-total-price">
          <p className="informationOder-product-container-total-price_name">
            {" "}
            Tổng cộng :{
              " "}
          </p>
          <p className="informationOder-product-container-total-price_price">
            {totalPrice && totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
          </p>
        </div>

        <div className="informationOder-product-container-payment">
          <div className="informationOder-product-container-payment-name">

          </div>

          <Link href={'/oderSucc'}>

            <button
              style={{
                padding: " 10px 20px",
                color: "white",
                backgroundColor: "#2B92E4",
                borderRadius: "3px",
              }}
            >
              {" "}
              Thanh toán{" "}
            </button>

          </Link>
        </div>
      </div>
    </div>
  );

}
export default InfomationOder;
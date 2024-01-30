import { useEffect, useState } from "react";
import ProductPetApis from "../../../../api/productPetApi";
import { useParams } from 'react-router-dom';

const ProductPetDetail = () => {
    const { id } = useParams();
    const productId = id;
    const [listProductPet, setListProductPet] = useState();
    const [loading, setLoadig] = useState(true);
    const fetchProductPetId = async () => {
        
        try {
            const response = await ProductPetApis.GetById(productId,{});
            setListProductPet(response.data);          
        }
        catch (err) {
        }
    };
    useEffect(() => {
        fetchProductPetId();
        const timer = setTimeout(() => {
            setLoadig(false);
          },3000 );
          return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <h1>Thông tin sản phẩm</h1>
            {loading ? (
                <p>Đang tải...</p>
            ) : (
                <div>
                    {/* <p>ID: {listProductPet.id}</p> */}
                    <p>Tên sản phẩm: {listProductPet.tenSanPham}</p>
               
                </div>
            )}
        </>
    )
};
export default ProductPetDetail
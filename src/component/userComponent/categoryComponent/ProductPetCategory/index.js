import '../ProductPetCategory/productPet.css'
import ProductPetApis from '../../../../api/productPetApi';
import { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router';
import numeral from 'numeral';
const ProductPetCategory = ({products}) => {
   
    const navigate = useNavigate();
    const [listProductPet, setListProductPet] = useState([]);
    const [pageIndexs, setPageIndex] = useState(1);
    const [totalRows, setTotalRow] = useState(0);
    const pageSizes = 9;
    const fetchProductPet = async () => {
        try {
            const response = await ProductPetApis.GetAllFillter(null, null,null, pageIndexs, pageSizes);
            setListProductPet(response.data.items);
            setTotalRow(response.data.totalRow) 
        }
        catch (err) {
        }
    };
    useEffect(() => {  
        fetchProductPet()
    }, [pageIndexs]);
    // const handleProductClick =(productId)=>{
    //     history.push(`/product/${productId}`);
    // }
    const handleOnchangePage = (page) => setPageIndex(page);
    const baseUrl = "http://localhost:52379"
    return (
        <>
            <div class="navbar-product-by"  >
                <div class="waper-product-category">           
                    {listProductPet.map((item) =>{                      
                       if(item.status){
                      return(
                        <div class="container-product-category " onClick={()=> navigate(`product/${item.id}`)} >
                            <div class="product-img-category">
                                <img src={baseUrl + item.images} alt='' />
                            </div>
                            <div class="product-content-category">
                                <div class="product-header-category">
                                    <p>{item.maSanPham}-{item.tenSanPham}</p>
                                </div>
                                <div class="product-title-category">
                                    <p>Genne:{item.gendeer}</p>
                                    <p>Age:{item.size} months </p>
                                </div>
                                <div class="product-price-category">
                                    <p>{numeral(item.price).format('0,000,00')} VND </p>
                                </div>
                            </div>
                        </div>
                        )};
                    return null;
                })}
                 
                    <div class="product-paging">
                        <Pagination
                            defaultCurrent={1}
                            total={totalRows}
                            current={pageIndexs}
                            onChange={handleOnchangePage}
                        />
                    </div>
                </div>
            </div >      
          </>
    )
};
export default ProductPetCategory;
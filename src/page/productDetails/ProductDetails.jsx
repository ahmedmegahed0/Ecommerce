import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './productDetails.css'
import SlideProduct from '../../components/slideProducts/SlideProduct';
import ProductDetailsoading from "./ProductDetailsLoading"
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading';
import ProductImages from './ProductImages.jsx'
import ProductInfo from './ProductInfo.jsx'
import PageTransition from '../../components/PageTransition.jsx';



function ProductDetails() {
    const { id } = useParams()

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log('Fetching product with ID:', id);
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                console.log('Product data:', data);
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.log('Error:', error);
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    useEffect(() => {
        if (!product) return;
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then((res) => res.json())
            .then((data) => {
                setRelatedProducts(data.products);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoadingRelatedProducts(false));
    }, [product?.category]);


    if (!product) return <p>product not found</p>

    return (
    <PageTransition key={id}>
  <div>
            {loading ? (
                <ProductDetailsoading />
            ) : (
                <div className='item_details'>
                    <div className="container">

                        <ProductImages product={product} />

                        <ProductInfo product={product} />
                    </div>

                </div>
            )}


            {loadingRelatedProducts ? (
                <SlideProductLoading />
            ) : (
                <SlideProduct
                    key={product.category}
                    data={relatedProducts}
                    title={product.category.replace("-", " ")}
                />
            )}
        </div>

 </PageTransition>
      
    )
}

export default ProductDetails


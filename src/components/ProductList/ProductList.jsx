import React, { useEffect } from 'react';
import { useProduct } from "../context/ProductContext";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ProductList = () => {
    const { readProduct, product,deleteProduct, UpdateProduct } = useProduct();

    useEffect(() => {
        readProduct();
    }, []);

    return (
        <div className='product'>
            {product && product.length > 0 ? (
                product.map((el) => (
                    <Card key={el.id} sx={{ width : "400px", height: "450px" }}>
                        <CardMedia
                            component="img"
                            alt="Product Image"
                            height="260"
                            image={el.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {el.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {el.type}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=>deleteProduct(el.id)}  size="small" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                            <Button onClick={()=>UpdateProduct(el.id)} size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))
            ) : (
                <Typography variant="body2" color="text.secondary">
                    No products available
                </Typography>
            )}
        </div>
    );
};

export default ProductList;

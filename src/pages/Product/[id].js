// [id].js or ProductDetail component
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DetailProduct } from '@/pages/DetailProduct';

export default function ProductInfo() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id, 'Product Info');
    return <div>ProductInfo</div>;
}

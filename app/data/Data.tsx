'use client'
import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Link, Button } from '@mui/material';
import styles from './data.module.css';

import { useSelector, useDispatch } from '../../redux/store';
import { getResources } from '@/redux/slices/mainSlice';

const Data: React.FC = () => {
    const dispatch = useDispatch();

    const { cardDetails } = useSelector((state) => state.cards);

    useEffect(() => {
        dispatch(getResources());
    }, []);

    const handleGetWorkClick = () => {
        dispatch(getResources());
    };

    const renderCard = (
        <Card sx={{
            mt: 10,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px', backgroundColor: '#F8C8DC', padding: '16px', maxWidth: '400px', margin: '0 auto', textAlign: 'center',
        }}>
            <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {cardDetails.activity}
                </Typography>
            </CardContent>
        </Card>
    );

    const renderButton = (
        <>
            <Button variant="contained" color="primary" onClick={handleGetWorkClick}>
                Generate next
            </Button>
        </>
    );

    return (
        <>
            <main className={styles.main}>

                <div style={{ marginTop: '30px', marginBottom: '15px' }}>
                    {renderCard}
                </div>
                <div style={{textAlign: "center"}}>
                    {renderButton}
                </div>

            </main>
        </>
    );
};

export default Data;
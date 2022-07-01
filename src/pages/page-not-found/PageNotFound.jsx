import React from 'react';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <main className='p-1'>
            <p>There's nothing here!</p>
            <Button>Go back to Home</Button>
        </main>
    );
};

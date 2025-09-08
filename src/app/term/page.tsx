import React from 'react';
import { TERMS } from '../constant/index';
import Post from '../components/Post';
import PageTitle from '../components/PageTitle';
const Term = () => {
    return (
        <>
            <PageTitle title='Terms and Conditions of Use' />
            <section className='policies'>
                {TERMS.map((item, id) => (
                    <Post title={item?.title} key={id} desc={item?.desc} />
                ))}
            </section>
        </>
    );
};

export default Term;

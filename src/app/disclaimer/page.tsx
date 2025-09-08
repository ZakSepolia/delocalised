import React from 'react';
import PageTitle from '../components/PageTitle';
import { DISCLAIMER } from '../constant/index';
import Post from '../components/Post';

const Disclaimer = () => {
    return (
        <>
            <PageTitle title='Disclaimer' />
            <section className='policies'>
                {DISCLAIMER.map((item, id) => (
                    <Post title={item?.title} key={id} desc={item?.desc} />
                ))}
            </section>
        </>
    );
};

export default Disclaimer;

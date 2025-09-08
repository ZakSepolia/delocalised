import React from 'react';
import { PRIVACY } from '../constant/index';
import Post from '../components/Post';
import PageTitle from '../components/PageTitle';

const Privacy = () => {
    return (
        <>
            <PageTitle title='Privacy Policy' />
            <section className='policies'>
                {PRIVACY.map((item, id) => (
                    <Post title={item?.title} key={id} desc={item?.desc} />
                ))}
            </section>
        </>
    );
};

export default Privacy;

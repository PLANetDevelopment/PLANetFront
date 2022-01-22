import React from 'react';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';

function Diary() {
    return (
        <Layout>
            <Footer activeMenu="diary">
                <div>일기</div>
            </Footer>
        </Layout>
    );
}

export default Diary;

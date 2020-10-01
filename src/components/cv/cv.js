import React from 'react';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { Page } from 'react-pdf';
import './cv.css';

const CV = () => {
    return (
        <div className="content">
            <section className="cv">
                <Document file="assets/cv.pdf" className="pdf" renderMode="svg">
                    <Page pageNumber={1} />
                </Document>
            </section>
        </div>
    );
};
export default CV;

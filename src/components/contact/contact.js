import React from 'react';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { Page } from 'react-pdf';

const contact = () => {
    return (
        <div className="contact">
            <Document file="assets/cv.pdf">
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default contact;

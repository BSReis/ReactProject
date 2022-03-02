import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

function ErroR() {
    return (
        <div>
            <div>
                404 Not Found
            </div>
        </div>
    );
}
ReactDOM.render(
    <BrowserRouter>
        <ErroR />
    </BrowserRouter>,
    document.getElementById('ErroR')
);
export default ErroR;





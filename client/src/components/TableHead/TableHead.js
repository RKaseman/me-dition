
import React from "react";
import "./TableHead.css";

const TableHead = (props) => {
    return (
        <table className="tableHead">
            <thead>
                <tr>
                    <th colSpan="5">
                        TableHead.js
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="text" placeholder="author" className="author" />
                    </td>
                    <td>
                        <input type="text" placeholder="year" className="year" />
                    </td>
                    <td>
                        <input type="text" placeholder="e-Book year" className="eYear" />
                    </td>
                    <td>
                        <input type="text" placeholder="series" className="series" />
                    </td>
                    <td>
                        <input type="text" placeholder="read count" className="readCount" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="5">
                        Search
                    </td>
                </tr>
                <tr>
                    <td>
                        sort by
                        <br />
                        author
                    </td>
                    <td>
                        sort by
                        <br />
                        year
                    </td>
                    <td>
                        sort by
                        <br />
                        eBook year
                    </td>
                    <td>
                        sort by
                        <br />
                        series
                    </td>
                    <td>
                        *
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableHead;


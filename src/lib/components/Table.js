const Table = (props) => {
    const { tableHeaderList, tableCellList, notExistCellVal = "-" } = props;
    // tableHeaderList should be list of object and each object should contain header value
    // and label of the header which maps the key in tableCellList objects with name of the header

    // tableCellList should be the list of objects and each object should contain the key as name of the header
    // Example:
    // tableHeaderList = [{headerName: 'FirstName', label: 'firstName'}, {headerName: 'LastName', label: 'lastName'}]
    return (
        <table>
            <thead>
                <tr>
                    {tableHeaderList &&
                        tableHeaderList.map((tableHeader, index) => (
                            <th key={`${tableHeader}_${index + 1}`}>
                                {tableHeader.headerName}
                            </th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {tableCellList &&
                    tableCellList.map((tableCellVal, index) => {
                        return (
                            <tr key={`${index + 1}`}>
                                {tableHeaderList &&
                                    tableHeaderList.map((tableHeader, idx) => {
                                        const { label } = tableHeader;
                                        return (
                                            <td
                                                key={`${tableHeader}_${
                                                    idx + 1
                                                }`}
                                            >
                                                {tableCellVal &&
                                                tableCellVal[tableHeader] &&
                                                label
                                                    ? tableCellVal[label]
                                                    : notExistCellVal}
                                            </td>
                                        );
                                    })}
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

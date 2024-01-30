import { Table, TableCell, TableContainer, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import TableHeader from "../TableHeader";
import { Beer } from "../../../types";
import { fetchData } from "../../../views/Home/utils";

const TableContent = () => {
    const [beerList, setBeerList] = useState<Array<Beer>>([]);

    // eslint-disable-next-line
    useEffect(fetchData.bind(this, setBeerList), []);

    const [orderDirection, setOrderDirection] = useState<Order>();
    const [valueToOrderBy, setValueToOrderBy] = useState('name');
    const [page, setpage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(1);

    const handleRequestSort = (event: any, property: any) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }

    function sortedRowinformation<Beer>(beerList: Beer[], comparator: (a: Beer, b: Beer) => number) {
      const stabilizedThis = beerList.map((beer, index) => [beer, index] as [Beer, number]);
      stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
          return order;
        }
        return a[1] - b[1];
      });
      console.log('sort ', stabilizedThis.map((el) => el[0]));
      return stabilizedThis.map((el) => el[0]);
    }

    function descendingComparator<Beer>(a: Beer, b: Beer, orderBy: keyof Beer) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    }
    
    type Order = 'asc' | 'desc' | undefined;
    
    function getComparator<Key extends keyof any>(
      order: Order,
      orderBy: Key,
    ): (
      a: { [key in Key]: number | any },
      b: { [key in Key]: number | any },
    ) => number {
      return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }

    return (
        <TableContainer>
            <Table>
                <TableHeader 
                valueToOrderBy={valueToOrderBy} 
                orderDirection={orderDirection}
                handleRequestSort={handleRequestSort}
                />
                {
                    sortedRowinformation(beerList, getComparator(orderDirection, valueToOrderBy))
                    .map((beer, index) => (
                        <TableRow key={index.toString()}>
                            <TableCell>
                                {beer.name}
                            </TableCell>
                            <TableCell>
                                {beer.brewery_type}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </Table>
        </TableContainer>

    );
}

export default TableContent;
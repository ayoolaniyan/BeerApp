import { Grid, Table, TableCell, TableContainer, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";
import TableHeader from "../TableHeader";

interface Props {
    valueToOrderBy: any;
    orderDirection: any;
    handleRequestSort: any;
    arrayList: any;
  }

const TableContent = (props: Props) => {
    const [rowsPerpage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    type Order = 'asc' | 'desc' | undefined;

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
    
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    return (
        <Grid>
        <TableContainer>
            <Table>
                <TableHeader 
                    valueToOrderBy={props.valueToOrderBy} 
                    orderDirection={props.orderDirection}
                    handleRequestSort={props.handleRequestSort}
                />
                {
                    sortedRowinformation(props.arrayList, getComparator(props.orderDirection, props.valueToOrderBy))
                    .slice(page * rowsPerpage, page * rowsPerpage + rowsPerpage)
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
        <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
            colSpan={3}
            component="div"
            count={props.arrayList.length}
            rowsPerPage={rowsPerpage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Grid>
    );
}

export default TableContent;
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

interface Props {
    valueToOrderBy?: any;
    orderDirection?: any;
    handleRequestSort?: any;
}

const TableHeader = (props: Props) => {

    const createSortHandler = (property: any) => (event: any) => {
        props.handleRequestSort(event, property)
    }

    return (
        <TableHead>
            <TableRow>
                
                <TableCell key="name">
                    <TableSortLabel 
                    active={props.valueToOrderBy === "name"} 
                    direction={props.valueToOrderBy === "name" ? props.orderDirection : 'asc'}
                    onClick={createSortHandler("name")}
                    >
                        Name
                    </TableSortLabel>
                </TableCell>

                <TableCell key="age">
                    <TableSortLabel 
                    active={props.valueToOrderBy === "age"} 
                    direction={props.valueToOrderBy === "age" ? props.orderDirection : 'asc'}
                    onClick={createSortHandler("age")}
                    >
                        Age
                    </TableSortLabel>
                </TableCell>

            </TableRow>
        </TableHead>
    );
}

export default TableHeader;
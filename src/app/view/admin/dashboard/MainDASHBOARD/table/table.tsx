import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const products = [
    {
      product: "Product Name",
      Qty: "3",
      Amount: "AED 159"
    },
    {
        product: "Product Name",
        Qty: "3",
        Amount: "AED 159"
      },
      {
        product: "Product Name",
        Qty: "3",
        Amount: "AED 159"
      },
      {
        product: "Product Name",
        Qty: "3",
        Amount: "AED 159"
      },
      {
        product: "Product Name",
        Qty: "3",
        Amount: "AED 159"
      }
      ,
      {
        product: "Product Name",
        Qty: "3",
        Amount: "AED 159"
      },
      {
        product: "Product Name",
        Qty: "3",
        Amount: "AED 159"
      }
      ,
      {
        product: "Product Name",
        Qty: "3",
        Amount: "AED 159"
      }
  ]
  
  export function TableDemo() {
    return (
      <Table className="border-2 border-[black] mb-[50px]">
        <TableHeader className="border-b-2 border-[black]">
          <TableRow>
            <TableHead className="text-[black] font-bold">Product</TableHead>
            <TableHead className="text-[black] font-bold">Qty</TableHead>
            <TableHead className="text-right text-[black] font-bold">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((pd,i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{pd.product}</TableCell>
              <TableCell>{pd.Qty}</TableCell>
              <TableCell className="text-right">{pd.Amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
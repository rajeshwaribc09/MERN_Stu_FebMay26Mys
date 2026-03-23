// ES module exports
// Named export for a shared constant 
export const taxrate=0.18;
// Named export for a reusable function
export function calculatetotal(subTotal){
    return subTotal+subTotal*taxrate;
}
// Default export[only one per file]:for the main feature of the module.
export default function createInvoiceLabel(invoiceNumber){
    return "Invoice: "+invoiceNumber;
}

// Import ES modules
// createInvoiceLabel:default export,calculatetotal,taxrate:named export
import createInvoiceLabel,{calculatetotal,taxrate} from "./P5.mjs";
const subtotal=4000;
const total=calculatetotal(subtotal);
const label=createInvoiceLabel("INV-2026-001");
console.log("Invoice Label:",label);
console.log("Tax rate: ",taxrate);
console.log("Final total: ",total);
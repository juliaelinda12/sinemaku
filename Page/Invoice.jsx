import { Link } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
let invoice = getInvoice();
    return (
    <div style={{ display: "flex" }}>
    <nav>

{invoice.map((invoice) => (
<Link
style={{ display: "block", margin: "1rem 0" }}
to={`/invoiceparam/${invoice.number}`}
key={invoice.number}
>
{invoice.name}
</Link>
))}
</nav>
</div>
);
}
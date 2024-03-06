import Button from 'react-bootstrap/Button';
import react from "react";

function button() {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Cetak Ticket
      </Button>
      <Button variant="secondary" size="lg">
        Detail Ticket
      </Button>
    </div>
  );
}

export default button;
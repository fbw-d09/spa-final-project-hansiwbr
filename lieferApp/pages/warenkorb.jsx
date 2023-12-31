import { Table, CloseButton, Button, Card } from "react-bootstrap"
import Image from "next/image"
export default function warenkorb() {
    return (
      <div>
        <h1>Warenkorb</h1>
        <div className="row mt-4">
          <div className="col-9">
            <Table hover responsive>
              <thead>
                <tr>
                  <th>Bild</th>
                  <th>Name</th>
                  <th>Extras</th>
                  <th>Menge</th>
                  <th>Betrag</th>
                  <th><CloseButton disabled /></th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Image src={"/bilder/produkte/cola.jpg"} alt="cola" width={50} height={50}/>
                  </td>
                  <td>Cola</td>
                  <td>doppelt</td>
                  <td>1</td>
                  <td>1,99</td>
                  <td><Button className="btn-sm">x</Button></td>
                </tr>
                <tr>
                  <td>
                    <Image src={"/bilder/produkte/pommes.jpg"} alt="pommes" width={50} height={50}/>
                  </td>
                  <td>Pommes</td>
                  <td>doppelt</td>
                  <td>1</td>
                  <td>3,50</td>
                  <td><Button className="btn-sm">x</Button></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-3 p2">
            <div className="shadow">
              <Card>
                <Card.Header as="h5">Gesamt</Card.Header>
                <Card.Body className="text-center">
                  <Card.Title>
                  6,95 Euro
                  </Card.Title>
                  <Button variant="primary">Zur Kasse</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

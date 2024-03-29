import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resume from "./../../Assets/Prashant-updated.pdf.pdf"
import pdf from "../../Assets/../Assets/Prashant-updated.pdf.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

 const resumeLink = "https://github.com/prashantky/porfolio-prashant/blob/master/Images/Prashant-Singh-Front-End-Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
const[pageNumber,setPageNumber]=useState(1)
  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
        
          <Document file={Resume} className="d-flex justify-content-center"  >
            <Page scale={width > 786 ? 1.7 : 0.6} pageNumber={pageNumber}  />
          </Document>
         
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

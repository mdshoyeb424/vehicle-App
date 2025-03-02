import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { faq } from "../../../data";
import "./faq.scss"
import Headline from "../../../common/headline";

const FAQ = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="container">
      <Headline  headline="Frequently Ask Questions (FAQs)"/>
      <Accordion open={open} toggle={toggle}>
        {faq.map((val, index) => (
          <AccordionItem>
            <AccordionHeader style={{fontWeight:"bold"}} className="fw-bold" targetId={index}>{val?.head}</AccordionHeader>
            <AccordionBody accordionId={index}>{val?.para}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;

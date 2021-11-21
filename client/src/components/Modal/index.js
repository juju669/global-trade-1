import React, { useState } from "react";
import { Modal, Button  } from "react-bootstrap";
import ContactForm from "../ContactForm";

const display = {
  variant: {
    backgroundColor: "red",
  },
  text: {
    textAlign: "justify",
  },
  inline: {
    display: "inline",
  },
  header: {
    textAlign: "center",
  },
  modalMargin: {
    marginTop: "100px",
  },
};

function ModalC(props) {
  const { onClose, isModalOpen, currentText } = props;

  return (
    <div>
      {currentText === "CONTACT US" ? (
        <Modal
          {...props}
          show={isModalOpen}
          onHide={onClose}
          animation={true}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header style={display.inline}>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={display.inline}
            >
              <h1 style={display.header}>Please Contact Us</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body show={isModalOpen} onHide={onClose} >
            <ContactForm onClose={ onclose }/>
          </Modal.Body>
          <Modal.Footer>
            <Button style={display.variant} onClick={onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal
          {...props}
          show={isModalOpen}
          onHide={onClose}
          animation={true}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={display.modalMargin}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Global Trade Privacy Policy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body show={isModalOpen} onHide={onClose} animation={true}>
            <p style={display.text}>
              Privacy Policy Last updated: (11/11/2021)
              <br />
              <br />
              Global Trade LLC ("us", "we", or "our") operates{" "}
              <a href="http://www.global-trade.com">
                http://www.global-trade.com
              </a>
              . This page informs you of our policies regarding the collection,
              use and disclosure of Personal Information we receive from users
              of the Site. We use your Personal Information only for providing
              and improving the Site. By using the Site, you agree to the
              collection and use of information in accordance with this policy.
              <br />
              <br />
              Information Collection and Use.
              <br />
              <br />
              While using our Site, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information may include but
              is not limited to your name ("Personal Information").
              <br />
              <br />
              Log Data
              <br />
              <br />
              Like many site operators, we collect information that your browser
              sends whenever you visit our Site ("Log Data").
              <br />
              <br />
              This Log Data may include information such as your computer's
              Internet Protocol ("IP") address, browser type, browser version,
              the pages of our Site that you visit, the time and date of your
              visit, the time spent on those pages and other statistics.
              <br />
              <br />
              In addition, we may use third party services such as Google
              Analytics that collect, monitor, and analyze this ... The Log Data
              section is for businesses that use analytics or tracking services
              in websites or apps, like Google Analytics.For the full disclosure
              section, create your own Privacy Policy.
              <br />
              <br />
              Communications
              <br />
              <br />
              We may use your Personal Information to contact you with
              newsletters, marketing or promotional materials and other
              information that ... The Communications section is for businesses
              that may contact users via email (email newsletters) or other
              methods. For the full disclosure section, create your own Privacy
              Policy.
              <br />
              <br />
              Cookies
              <br />
              <br />
              Cookies are files with small amount of data, which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a web site and stored on your computer's hard drive. Like many
              sites, we use "cookies" to collect information.
              <br />
              <br />
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Site.
              <br />
              <br />
              Security
              <br />
              <br />
              The security of your Personal Information is important to us but
              remember that no method of transmission over the Internet, or
              method of electronic storage, is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
              <br />
              <br />
              Changes To This Privacy Policy
              <br />
              <br />
              This Privacy Policy is effective as of November 11, 2021 and will
              remain in effect except with respect to any changes in its
              provisions in the future, which will be in effect immediately
              after being posted on this page.
              <br />
              <br />
              We reserve the right to update or change our Privacy Policy at any
              time and you should check this Privacy Policy periodically. Your
              continued use of the Service after we post any modifications to
              the Privacy Policy on this page will constitute your
              acknowledgment of the modifications and your consent to abide and
              be bound by the modified Privacy Policy.
              <br />
              <br />
              If we make any material changes to this Privacy Policy, we will
              notify you either through the email address you have provided us,
              or by placing a prominent notice on our website
              <br />
              <br />
              Contact
              <br />
              <br />
              Us If you have any questions about this Privacy , please contact
              us
              <br />
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button style={display.variant} onClick={onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default ModalC;

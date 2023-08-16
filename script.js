console.log("file test");

function hover(img) {
  img.src = "images/bakeryinterior1cropped.jpg";
}

function hoverOut(img) {
  img.src = "images/bakerycountercropped.jpg";
}

function sendEmail() {
  Email.send({
    SecureToken: "3d3ba486-9c6b-42fb-bcb3-eaa0397d6882",
    To: "meg.veale@outlook.com",
    From: "meg.veale@outlook.com",
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone No: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent successfully"));
}

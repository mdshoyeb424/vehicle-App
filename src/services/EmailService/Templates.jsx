const logo = "https://aa1scrapcenter.com/images/forwhitelogo.png";

export const sendTamplate = (data) => `
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">

  <div style="text-align: center; padding: 20px; background-color: #f7f7f7; margin-bottom: 20px;">
   <img src="https://aa1scrapcenter.com/images/forwhitelogo.png" alt="AA1 Scrap Center Logo" style="width: 150px; height: auto; margin-bottom: 10px;">
    <h1 style="color: #008e6e;">AA1 Scrap Center</h1>
    <p style="font-size: 15px;">Scrap Legally, Save Economy</p>
  </div>

  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
    <h4 style="color: #008e6e; text-align:center">Vehicle ${data?.type} Request Details</h4>

        ${data?.name ? `<p><strong>Name:</strong> ${data.name}</p>` : ""}
    ${data?.email ? `<p><strong>Email Id:</strong> ${data.email}</p>` : ""}
    ${data?.contact ? `<p><strong>Phone Number:</strong> ${data.contact}</p>` : ""}
    ${
      data?.nameOfVehicle
        ? `<p><strong>Vehicle Name:</strong> ${data.nameOfVehicle}</p>`
        : ""
    }
    ${data?.model ? `<p><strong>Model:</strong> ${data.model}</p>` : ""}
    ${
      data?.fuelType
        ? `<p><strong>Fuel Type:</strong> ${data.fuelType}</p>`
        : ""
    }
    ${data?.memberType ? `<p><strong>Member Type:</strong> ${data.memberType}</p>` : ""}
    ${data?.address ? `<p><strong>Address:</strong> ${data.address}</p>` : ""}
    ${data?.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}

    <p style="margin-top: 20px; font-style: italic;">Thank you for reaching out to AA1 Scrap Center. Our team will get back to you soon regarding your vehicle.</p>
  </div>

  <footer style="text-align: center; margin-top: 20px;">
    <p>&copy; 2025 AA1 Scrap Center | All rights reserved.</p>
  </footer>

</body>
`;

function getDonationConfig(merchantID, purchaseTotalCents) {
  // fetch donation config from server
}

function getDonationComponent(merchantID, purchaseTotalCents) {
  const config = getDonationConfig(merchantID, purchaseTotalCents);
  // return component rendered with config
}

function markDonationComplete(merchantID, donationAction) {
  // post to server donation action complete
}
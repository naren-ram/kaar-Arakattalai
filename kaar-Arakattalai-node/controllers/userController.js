exports.getProfile = (req, res) => {
  const userData = {
    name: "Anbarasi",
    aid: 50,
    designation: "Professional",
    manager: "Srinivasan Subbiah",
    annualContribution: 100000,
    annualEligibleReferral: 200000,
    balanceEligibleReferral: 20000,
    myReferrals: 0,
    profilePicture: "/assets/profile_picture.png"
  };
  res.json(userData);
};

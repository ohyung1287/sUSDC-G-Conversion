const verifyMessage = async (provider, address, signedMessage, signature, setVerified, setError) => {
  if (!provider) return;
  try {
    const verify = await provider.request({
      method: "personal_ecRecover",
      params: [signedMessage, signature],
    });
    setVerified(verify === address.toLowerCase());
  } catch {
    setError("Error verifying message");
  }
};

export default verifyMessage;

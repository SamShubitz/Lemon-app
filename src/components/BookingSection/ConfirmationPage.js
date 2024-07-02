export default function ConfirmationPage({phoneNumber}) {

    const formatPhoneNumber = (phoneNumber) => {
        const strippedNumber = phoneNumber.replace(/\D/g, '');
        const areaCode = strippedNumber.slice(0, 3);
        const firstPart = strippedNumber.slice(3, 6);
        const secondPart = strippedNumber.slice(6, 10);
        return `(${areaCode}) ${firstPart}-${secondPart}`;
      };

    const formattedNumber = formatPhoneNumber(phoneNumber);

    return (
    <div className="confirmation-page">
        <h1>Booking confirmed!</h1>
        <img src="booking-confirmed-icon.svg" alt="confirmation icon"/>
        <span>
        <p>Thank you for your reservation!</p>
        <p>A confirmation text will be sent to {formattedNumber}.</p>
        <p>We look forward to seeing you soon.</p>
        </span>
    </div>
    );
}
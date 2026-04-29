import whatsappIcon from "@/assets/whatsapp-icon.png";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/233000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-16 w-16 object-contain" style={{ background: "transparent" }} />
    </a>
  );
}

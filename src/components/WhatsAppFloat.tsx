import whatsappIcon from "@/assets/whatsapp-icon.png";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/233000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full transition-transform hover:scale-110"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-14 w-14 object-contain drop-shadow-lg" />
      <span className="absolute inset-0 rounded-full animate-ping bg-whatsapp/40 -z-10" />
    </a>
  );
}

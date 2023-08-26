import "./ContactFromStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Benimle İletişime Geçin!</h1>
      <form>
        <input placeholder="İsim" />
        <input placeholder="Email" />
        <input placeholder="Konu" />
        <textarea placeholder="Mesaj" rows="4"></textarea>
        <button>Mesajı Gönderin</button>
      </form>
    </div>
  );
}

export default ContactForm;

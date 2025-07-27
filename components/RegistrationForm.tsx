export default function RegistrationForm() {
  return (
    <section id="register">
      <h2>Register Now</h2>
      <h4>Only for CXO's and C-suite Executive - something something aayega</h4>
      <form action="https://docs.google.com/forms/d/e/1FAIpQLSdrrjsJjQgS4BRL7xLLj8GlUY4cWU0vpYGCqNdk4uyt3a9WWQ/formResponse" method="POST" target="_blank">
        <input name="entry.908281632" type="text" placeholder="Full Name" required />
        <input name="entry.848946238" type="text" placeholder="Designation" required />
        <input name="entry.651353326" type="text" placeholder="Company" required />
        <input name="entry.1089088489" type="email" placeholder="Email" required />
        <input name="entry.126764998" type="tel" placeholder="Phone Number" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

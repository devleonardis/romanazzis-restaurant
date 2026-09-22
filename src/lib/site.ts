export const site = {
  name: "Romanazzi's Restaurant",
  tagline: "Cucina raffinata sul mare",
  address: "Piazza Porto, 32, 70054 Giovinazzo BA, Italia",
  phone: "+39 080 332 3845",
  phoneHref: "tel:+390803323845",
  email: "ristoranteromanazzis@gmail.com",
  jobsEmail: "job@romanazzis.it",
  hours: {
    pranzo: "12:30 – 14:30",
    cena: "19:30 – 22:30",
  },
  social: {
    facebook: "https://www.facebook.com/romanazzis/",
    instagram: "https://www.instagram.com/romanazzis_restaurant/",
    tripadvisor:
      "https://www.tripadvisor.com/Restaurant_Review-g659608-d4063949-Reviews-Romanazzi_s_Restaurant-Giovinazzo_Province_of_Bari_Puglia.html",
  },
  booking:
    "https://ypbfeygzmlodmzrfj5bn4gqk33umeh0z.forms.pienissimo.pro/?id=Kn1nHv",
  piva: "07427660720",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/il-ristorante", label: "Il Ristorante" },
  { href: "/menu", label: "Menù" },
  { href: "/carta-vini", label: "Carta dei Vini" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
];

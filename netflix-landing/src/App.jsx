import Header from "./components/header";
import Banner from "./components/banner";
import Section from "./components/section";
import List from "./components/list";
import Card from "./components/card";
import Posters from "./components/posters";
import Footer from "./components/footer";
import "./styles/_variables.scss";

const chapters = [
  {
    id: 1,
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTwhr1FZCYAQGa1NN8EFbj8JMgxMbZzBVGPDLqqieJrVPEMylyc-xlABYQqxKtGa4UI6jpIkMk9o3MmUExfUjy_d9z2d6gF_0yXm70o2QYLx4z5FC1gUc-Ux.jpg?r=de3",
    titulo: "Steven ve un fantasma",
    descripcion:
      "Steven, que está investigando una historia de fantasmas para su próxima novela, recibe una llamada de su hermana que desencadena una serie de desafortunados eventos.",
  },
  {
    id: 2,
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa0ZG3Qa0dJ4J12d5Od5mn4Mo2y2qiEdNlLqeyZhxYIZaIuL4-HchhaAxIGKAZWaeR61J5IpurZYInq0etlDVl7OHZkJ0TWHqkVFaicgpWwXXZ3BUrNcm1g3.jpg?r=168",
    titulo: "Ataúd abierto",
    descripcion:
      "Una terrible tragedia familiar trae recuerdos de otras pérdidas traumáticas. Shirley recuerda su primer encuentro con la muerte, despertándose así sus miedos más ocultos.",
  },
  {
    id: 3,
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRkRg8rRJc2yezQ5gRMkLOU1RioJNnmayDpGU4mZxrFEmJlDLj9wHGvSyPKTzNPnqC89_67DKedYUAwUoXeK9VTjxZcjdOpBfgZi_bTT2Nlo883BawBJtnI6.jpg?r=fc7",
    titulo: "Tacto",
    descripcion:
      "Theo, extremadamente sensible, se ve reflejada en una joven paciente con problemas que se siente amenazada por un espeluznante señor Sonrisas.",
  },
  {
    id: 4,
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfIn1m9bfkN-hDhR48Hkr4G9piDBhbdDbYYTsUYKuQyLpmwcwKDjs4PUmjPv4QFbSgfOTjFRcQufFgHr9E5yjSU4nLVOrTfR_SdQE0M40XRv8IXeuV73QJ7X.jpg?r=35a",
    titulo: "Cosas de gemelos",
    descripcion:
      "Un trastornado Luke, aún luchando contra la adicción y sus miedos interiores, intenta ayudar a una amiga cuando siente que su hermana gemela está en peligro.",
  },
  {
    id: 5,
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc5kAClaYiMLJvE9WJvmtHyTxQIXZ3JcIXRr7zNOu7BTCic0OcMw4cR047itcFxQDi_JV3gPSXs0MZqhqoA9R74ZhrHHLLuUwXLkQLjn3lqROZcwvjWrU2mO.jpg?r=0c5",
    titulo: "La señora del cuello torcido",
    descripcion:
      "Un tenebroso espectro de silueta indefinida ha perseguido a Nell desde que era una niña. Ahora la señora del cuello torcido ha vuelto y quiere que Nell vuelva a casa.",
  },
  {
    id: 6,
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVBpWnN9t9C9_jsRdWOKOxRF6iD7uXI1q1jcrcc-eZgHNAtjhX6t_U-R1aVPDuXM6exoQK0cx6at8n6V54fyzfgRsnyCg8RwlrOvz9DVLorwETwDp0fMmZWd.jpg?r=581",
    titulo: "Dos tormentas",
    descripcion:
      "La familia se reúne y no precisamente para celebrar. Hugh acude al funeral en una noche tormentosa y se encuentra con sus hijos a los que hace tiempo que no ve.",
  },
  {
    id: 7,
    titulo: "Elegía",
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfrm8DZDqWRZoTEUTBCxqwcuXIf_4EMpKzAyosaMyzr0MAuCiCfOGui3NzS5QnsB0LhCjIweTCcFBSxwTDe1ghl7-x83GBFSzAMEBifEz-kw1Bl8oU_7kbPf.jpg?r=478",
    descripcion:
      "Cuando los Crain se reúnen para el último adiós, un flashback revela la conexión del señor Dudley con la casa, desvelándose un secreto tras una pared.",
  },
  {
    id: 8,
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb-QuiWsOoYIULPD1-MVTyO86m2FDt05d7fMywNmktGsv7Me7KKnMPuQ6HvmLI_Or8tBGWHtsjrKF7Cb9YwQglx4HHcdgQo9JPLSJxeOPBxVNs18NXrdz4cv.jpg?r=92b",
    titulo: "Marcas testigo",
    descripcion:
      "En la noche de Halloween, un espectro del pasado vuelve a visitar a Shirley y a Theo. Tras la desaparición de Luke, Hugh y Steve temen por su vida y salen a buscarlo.",
  },
  {
    id: 9,
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfoTWMt82x271BQLtjsZ5vZ6riyLtOsAGcsKpDv0_BwbV8XE4d0sT71DGC5yBUXe-bgZqLi3G5qd-F7farlmMai9FDuY_mfqRZzxvqsOP1qAXq3Evnl0UZQF.jpg?r=805",
    titulo: "Malos sueños",
    descripcion:
      "Olivia intenta discernir entre sueño y realidad. La Sra. Dudley la anima a seguir su instinto maternal y a proteger a sus hijos.",
  },
  {
    id: 10,
    imagen:
      "https://occ-0-3393-360.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUIUgNfHmDS7BAe20vTFuutyu-KLGVubSrNU8-G3JF5d0GCgOI__CaCYQUZ-yK3bhzWa-LKusQygyqVsTDqmRXYCtYGciySrHb1bOf0DRNOH-Jhc1QJFTb0s.jpg?r=637",
    titulo: "El silencio empuja incansable",
    descripcion:
      "El contenido de la habitación roja se desvela. Los Crain regresan a la casa para enfrentarse a los viejos fantasmas, los secretos más terribles y a un demonio insaciable.",
  },
];

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Section title="Chapters">
        <List>
          {chapters.map((info, index) => {
            return <Card key={index} info={info} />;
          })}
        </List>
      </Section>
      <Section title="Similar shows">
        <Posters />
      </Section>
      <Footer />
    </>
  );
}

export default App;

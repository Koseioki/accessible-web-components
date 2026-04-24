// import heroImage from "../assets/accessible-components.webp";

export function IntroText() {
  return (
    <section className="centered">
      <h2 id="about">About</h2>
            {/* <img src={heroImage} className="hero" aria-hidden="true" alt="" /> */}

        <p>
        These components were created for developers at{" "}
        <a href="https://www.bankdata.dk" className="plain-link">
          Bankdata
        </a>{" "}
        to help remediate the components used on the websites or netbanks of its
        customer local banks, such as{" "}
        <a href="https://www.jyskebank.dk" className="plain-link">
          Jyske Bank
        </a>
        ,{" "}
        <a href="https://www.sydbank.dk" className="plain-link">
          Sydbank
        </a>
        ,{" "}
        <a href="https://www.landbobanken.dk" className="plain-link">
          Landbobank
        </a>
        ,{" "}
        <a href="https://www.spks.dk" className="plain-link">
          Sparekassen Sjælland-Fyn
        </a>
        ,{" "}
        <a href="https://www.skjernbank.dk" className="plain-link">
          Skjern Bank
        </a>
        , and{" "}
        <a href="https://www.djurslandsbank.dk" className="plain-link">
          Djurslands Bank
        </a>
        .
      </p>
      <p>
        Each component includes a working demo and comprehensive specification
        documents for developers.
      </p>
    </section>
  );
}
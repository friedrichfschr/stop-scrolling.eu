import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 pt-8 text-sm">
      <nav className="flex gap-5">
        <a href="/">Home</a>
        <a href="/impressum">Impressum</a>
      </nav>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <header className="space-y-3 border-b border-zinc-800 pb-8">
        <p className="text-sm font-medium uppercase tracking-wide">
          An EU citizen's initiative
        </p>
        <h1 className="text-4xl font-semibold">Stop-Scrolling.eu</h1>
        <i>
          This site is under construction.
        </i>
      </header>

      <div className="space-y-6 text-lg leading-8">

        <p>
          Short-form content is highly addictive and a menace to our society.
        </p>
        <p>
          Social Media is a monopoly. By peer pressure, social norms, and job requirements, users are forced to use it.
        </p>
        <p>
          Users involuntarily subject themselves to addictive mechanisms, designed to suck them further into the application.
        </p>
        <p>
          Oftentimes, users download the app for social connections, and specific features, such as friends' stories, however, by design
          they are then exposed to addictive short-form content, which they did not sign up for, and which they cannot avoid without deleting the app.
        </p>
        <p>
          To fight this problem, many 3rd party applications have been developed in recent years to block short-form content. However, these applications
          are often unreliable, require technical knowledge to use, hence not available to all users, and are not a long-term solution to the problem.
        </p>
        <p>
          For this reason, to facilitate the choice against addiction, social media corporations, like Instagram and YouTube, should have to provide their users
          with the ability to opt out of short-form content.
        </p>
        <p>
          As this short-form content is highly monetized, corporations will not provide this option voluntarily, so it is the responsibility of the EU to legislate
          and enforce this right for its citizens.
        </p>
        <p>
          The EU needs to provide their citizens with ways to protect themselves from this menace.
        </p>
        <p>
          For this reason, we are starting the "stop-scrolling.eu" citizen's initiative
        </p>
      </div>
    </>
  );
}

function ImpressumPage() {
  return (
    <>
      <header className="space-y-3 border-b border-zinc-800 pb-8">
        <h1 className="text-4xl font-semibold">Impressum</h1>
      </header>

      <div className="space-y-2 text-lg leading-8">
        <p>Friedrich Fischer</p>
        <p>
          <a href="mailto:friedrich.riesel@outlook.de">
            friedrich.riesel@outlook.de
          </a>
        </p>
        <p>
          <a href="https://friedrich-fischer.de">
            friedrich-fischer.de
          </a>
        </p>
      </div>
    </>
  );
}

function App() {
  const isImpressumPage = window.location.pathname === "/impressum";

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100">
      <section className="mx-auto flex max-w-2xl flex-col gap-8">
        {isImpressumPage ? <ImpressumPage /> : <HomePage />}
        <Footer />
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

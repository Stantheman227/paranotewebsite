import React from "react";
import Footer from "../components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Datenschtzerklärung",
};

export default function Datenschutzerklärung() {
  return (
    <div className="h-full w-full bg-white">
      <header className=" p-5">
        <Link href="/" className="hover:underline">
          <Image
            src={"/ParaNoteLogoLM@3x.png"}
            height={70}
            width={140}
            alt="Paranote_logo"
            className=""
          ></Image>
        </Link>
      </header>
      <section className="max-w-4xl mx-auto p-5">
        <div className="mb-8">
          <ContactIcon className="text-black w-6 h-6" />
          <h1 className="text-2xl font-bold mt-2">Kontaktdaten</h1>
          <p className="mt-1">Anbieter und Verantwortlicher</p>
          <p>Paranote GbR - Marmstorfer Weg 128, 21077 Hamburg - Deutschland</p>
          <p className="mt-1">E-Mail-Adresse des Anbieters: mail@paranote.de</p>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="mt-8">
          <h2 className="text-xl font-bold">
            VOLLSTÄNDIGE DATENSCHUTZERKLÄRUNG
          </h2>
        </div>
        <hr className="border-t border-gray-300 mt-8" />
        <div className="mt-8">
          <h3 className="text-lg font-bold">Anbieter und Verantwortlicher</h3>
          <p>Paranote GbR - Marmstorfer Weg 128, 21077 Hamburg - Deutschland</p>
          <p className="mt-1">E-Mail-Adresse des Anbieters: mail@paranote.de</p>
        </div>
        <div className="mt-8 mb-8">
          <h3 className="text-lg font-bold">Arten der erhobenen Daten</h3>
          <p>
            Zu den personenbezogenen Daten, die diese Anwendung selbstständig
            oder durch Dritte verarbeitet, gehören: Vorname; Nachname; E-Mail;
            Nutzungsdaten; Universally Unique Identifier (UUID); Crash-Daten;
            Geräteinformationen; Tracker.
          </p>
          <p className="mt-1">
            Vollständige Details zu jeder Art von verarbeiteten
            personenbezogenen Daten werden in den dafür vorgesehenen Abschnitten
            dieser Datenschutzerklärung oder punktuell durch Erklärungstexte
            bereitgestellt, die vor der Datenerhebung angezeigt werden.
            Personenbezogene Daten können vom Nutzer freiwillig angegeben oder,
            im Falle von Nutzungsdaten, automatisch erhoben werden, wenn diese
            Anwendung genutzt wird.
          </p>
          <p className="mt-1">
            Sofern nichts anderes angegeben, ist die Angabe aller durch diese
            Anwendung angeforderten Daten obligatorisch. Weigert sich der
            Nutzer, die Daten anzugeben, kann dies dazu führen, dass diese
            Anwendung dem Nutzer ihre Dienste nicht zur Verfügung stellen kann.
            In Fällen, in denen diese Anwendung die Angabe personenbezogener
            Daten ausdrücklich als freiwillig bezeichnet, dürfen sich die Nutzer
            dafür entscheiden, diese Daten nicht zu geben ohne jegliche Folgen
            für die Verfügbarkeit oder die Funktionsfähigkeit des Dienstes nicht
            anzugeben.
          </p>
          <p className="mt-1">
            Nutzer, die sich darüber im Unklaren sind, welche personenbezogenen
            Daten obligatorisch sind, können sich an den Anbieter wenden.
          </p>
          <p className="mt-1">
            Jegliche Verwendung von Cookies – oder anderer Tracking-Tools –
            durch diese Anwendung oder Anbieter von Drittdiensten, die durch
            diese Anwendung eingesetzt werden, dient dem Zweck, dem Nutzer
            gewünschten Dienst zu erbringen, und allen anderen Zwecken, die im
            vorliegenden Dokument und in der Cookie-Richtlinie beschrieben sind.
          </p>
          <p className="mt-1">
            Die Nutzer sind für alle personenbezogenen Daten Dritter
            verantwortlich, die durch diese Anwendung beschafft, veröffentlicht
            oder weitergegeben werden.
          </p>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Art und Ort der Datenverarbeitung
          </h2>
        </div>

        <hr className="border-t border-gray-300 mt-8" />
        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Verarbeitungsmethoden
            </h3>
            <p className="text-gray-600">
              Der Anbieter verarbeitet die Nutzerdaten auf ordnungsgemäße Weise
              und ergreift angemessene Sicherheitsmaßnahmen, um den unbefugten
              Zugriff und die unbefugte Weiterleitung, Veränderung oder
              Vernichtung von Daten zu vermeiden. Die Datenverarbeitung wird
              mittels Computern oder IT-basierten Systemen nach
              organisatorischem Verfahren und Verfahrensweisen durchgeführt, die
              gezielt auf die angegebenen Zwecke abzielen. Zusätzlich zum
              Verantwortlichen könnten auch andere Personen intern
              (Personalverwaltung, Vertrieb, Marketing, Rechtsabteilung,
              Systemadministratoren) oder extern – und in dem Fall soweit
              erforderlich, vom Verantwortlichen als Auftragsverarbeiter benannt
              (wie Anbieter technischer Dienstleistungen, Zustellunternehmen,
              Hosting-Anbieter, IT-Unternehmen oder Kommunikationsagenturen) -
              diese Anwendung betreiben und damit Zugriff auf die Daten haben.
              Eine aktuelle Liste dieser Beteiligten kann jederzeit vom Anbieter
              verlangt werden.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Ort</h3>
            <p className="text-gray-600">
              Die Daten werden in der Niederlassung des Anbieters und an allen
              anderen Orten, an denen sich die an der Datenverarbeitung
              beteiligten Stellen befinden, verarbeitet. Je nach Standort der
              Nutzer können Datenübertragungen die Übertragung der Daten des
              Nutzers in ein anderes Land als das eigene beinhalten. Um mehr
              über den Ort der Verarbeitung der übermittelten Daten zu erfahren,
              können die Nutzer den Abschnitt mit den ausführlichen Angaben zur
              Verarbeitung der personenbezogenen Daten konsultieren.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Speicherdauer</h3>
            <p className="text-gray-600">
              Sofern in diesem Dokument nicht anderweitig festgelegt, werden
              personenbezogene Daten so lange verarbeitet und gespeichert, wie
              es der Zweck erfordert, zu dem sie erhoben wurden, und können ggf.
              aufgrund einer zu erfüllenden rechtlichen Verpflichtung oder
              basierend auf der Einwilligung des Nutzers auch länger aufbewahrt
              werden.
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-300 mt-8" />
        <div className="space-y-6 mt-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Zwecke der Verarbeitung
            </h3>
            <p className="text-gray-600">
              Personenbezogene Daten über den Nutzer werden erhoben, damit der
              Anbieter den Dienst erbringen und des Weiteren seinen gesetzlichen
              Verpflichtungen nachkommen, auf Durchsetzungsforderungen
              reagieren, seine Rechte und Interessen (oder die der Nutzer oder
              Dritter) schützen, böswillige oder betrügerische Aktivitäten
              aufdecken kann. Darüber hinaus werden Daten zu folgenden Zwecken
              erhoben: Registrierung und Anmeldung, Hosting und
              Backend-Infrastruktur, Überwachung der Infrastruktur, Kontaktieren
              des Nutzers und Offline Datenverarbeitung. Nutzer können im
              Abschnitt “Ausführliche Angaben über die Verarbeitung
              personenbezogener Daten” dieses Dokuments weitere detaillierte
              Informationen zu diesen Verarbeitungszwecken und die zu den für
              den jeweiligen Zweck verwendeten personenbezogenen Daten
              vorfinden.
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Ausführliche Angaben über die Verarbeitung personenbezogener Daten
          </h2>
        </div>

        <hr className="border-t border-gray-300 mt-8" />
        {/* 1. */}
        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Hosting und Backend-Infrastruktur
            </h3>
            <p className="text-gray-600">
              Diese Art von Diensten haben zum Zweck, Daten und Dateien zu
              hosten, damit diese Anwendung verwaltet und verwendet werden kann.
              Des Weiteren können diese Angebote eine vorgefertigte
              Infrastruktur zur Verfügung stellen, die spezifische Funktionen
              oder ganze Bestandteile für diese Anwendung abwickelt. Einige der
              unten aufgeführten Dienste können, müssen aber nicht, über
              geografisch verteilte Server funktionieren, was es schwierig
              macht, den tatsächlichen Speicherort der personenbezogenen Daten
              zu bestimmen.
            </p>
            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                Firebase Cloud Firestore
              </h4>
              <p className="text-gray-600">
                Firebase Cloud Firestore ist ein Webhosting und Backend Dienst,
                bereitgestellt von Google LLC oder von Google Ireland Limited,
                je nachdem, wie der Anbieter die Datenverarbeitung verwaltet.
                Verarbeitete personenbezogene Daten: Nutzungsdaten; verschiedene
                Datenarten, wie in der Datenschutzerklärung des Dienstes
                beschrieben. Verarbeitungsort: Deutschland –
                Datenschutzerklärung; Deutschland – Datenschutzerklärung.
              </p>
            </div>
            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                Firebase Realtime Database
              </h4>
              <p className="text-gray-600">
                Firebase Realtime Database ist ein Webhosting und Backend
                Dienst, bereitgestellt von Google LLC oder von Google Ireland
                Limited, je nachdem, wie der Anbieter die Datenverarbeitung
                verwaltet. Verarbeitete personenbezogene Daten: Nutzungsdaten;
                verschiedene Datenarten, wie in der Datenschutzerklärung des
                Dienstes beschrieben. Verarbeitungsort: Deutschland –
                Datenschutzerklärung; Deutschland – Datenschutzerklärung.
              </p>
            </div>
            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                Notizen und Firebase
              </h4>
              <p className="text-gray-600">
                Paranote verwendet eine Kombination aus lokaler Indizierung und
                Cloud-Speicherung, um eine effiziente Suche und Zugänglichkeit
                Ihrer Notizen zu ermöglichen. Während die Indizierung Ihrer
                Notizen lokal auf Ihrem Gerät erfolgt, um die Suche zu
                beschleunigen, werden Ihre Notizen zur Sicherstellung ihrer
                Verfügbarkeit auf verschiedenen Geräten in der Firebase
                Firestore Database gespeichert. Der Hauptzweck der
                Datenverarbeitung besteht darin, Ihnen eine nahtlose Erfahrung
                bei der Verwendung von Paranote zu bieten, indem Ihre Notizen
                sicher in der Cloud gespeichert werden, sodass Sie von jedem
                Gerät aus darauf zugreifen können. Dies umfasst die Organisation
                Ihrer Notizen nach Gesetzbüchern, Paragraphen, Hashtags oder
                Farben für eine systematische Gliederung und visuelle
                Unterscheidung. Ihre Notizdaten werden sicher an die Firebase
                Firestore Database übertragen und dort gespeichert. Die
                Übertragung und Speicherung erfolgen unter Einhaltung der
                höchsten Sicherheitsstandards und Datenschutzpraktiken, um den
                Schutz Ihrer personenbezogenen Daten zu gewährleisten.
              </p>
            </div>
          </div>
        </div>
        {/* 2. */}
        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Kontaktieren des Nutzers
            </h3>

            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                Mailingliste oder Newsletter (diese Anwendung)
              </h4>
              <p className="text-gray-600">
                Durch Anmelden zur Mailingliste oder zum Newsletter wird die
                E-Mail-Adresse des Nutzers der Kontaktliste der Personen
                hinzugefügt, die möglicherweise E-Mail-Nachrichten mit
                gewerblichen oder verkaufsfördernden Informationen in Bezug auf
                diese Anwendung erhalten. Darüber hinaus kann Ihre
                E-Mail-Adresse dieser Liste zugefügt werden, wenn Sie sich für
                diese Anwendung angemeldet haben oder nachdem Sie einen Kauf
                vorgenommen haben. Verarbeitete personenbezogene Daten: E-Mail;
                Tracker.
              </p>
            </div>
          </div>
        </div>
        {/* 3. */}
        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Offline Datenverarbeitung
            </h3>

            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                Notizen und Suche
              </h4>
              <p className="text-gray-600">
                Paranote indiziert automatisch alle Inhalte Ihrer Notizen und
                erstellt einen lokalen Index auf Ihrem Gerät, um die Suche und
                Organisation Ihrer Notizen zu beschleunigen. Diese
                Datenverarbeitung findet ausschließlich lokal auf Ihrem Gerät
                statt und dient dazu, Ihnen eine effiziente, personalisierte und
                sichere Notizverwaltung zu bieten. Der Zweck der lokalen
                Datenverarbeitung besteht darin, Ihnen eine schnelle und präzise
                Suche innerhalb Ihrer Notizen zu ermöglichen. Dies umfasst die
                Organisation Ihrer Notizen nach spezifischen Gesetzbüchern,
                eigenen Paragraphen, Hashtags oder Farben für eine systematische
                Gliederung und visuelle Unterscheidung.
              </p>
            </div>
            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                ParaScout
              </h4>
              <p className="text-gray-600">
                ParaScout, ein innovatives Feature unserer App, wurde speziell
                entwickelt, um Nutzern eine effiziente und sichere Methode zur
                Erkennung und Extraktion von Paragraphen aus Textdateien zu
                bieten. Diese Richtlinie erläutert, wie ParaScout Ihre Daten
                verarbeitet und schützt, insbesondere im Hinblick auf die lokale
                Verarbeitung von Textdateien und die Nutzung der Firestore
                Realtime Database zum Abrufen von Gesetzestexten. ParaScout
                analysiert und verarbeitet Textdateien ausschließlich auf Ihrem
                lokalen Gerät. Diese lokale Verarbeitung ermöglicht die
                Erkennung und Extraktion von Paragraphen, ohne dass Ihre Texte
                an externe Server gesendet oder in irgendeiner Weise mit unseren
                Servern in Berührung kommen. Dieser Ansatz garantiert die
                maximale Privatsphäre und Sicherheit Ihrer Daten, indem er
                sicherstellt, dass alle Informationen auf Ihrem Gerät bleiben.
                Nach der Erkennung und Extraktion von Paragraphen durch
                ParaScout kann die App relevante Gesetzestexte anzeigen. Sollten
                die benötigten Gesetzestexte nicht bereits auf Ihrem Gerät
                vorhanden sein, werden diese aus unserer Firestore Realtime
                Database bezogen. Es ist wichtig zu betonen, dass bei diesem
                Vorgang keine der durch ParaScout lokal verarbeiteten Texte
                übermittelt wird. Lediglich die Anfragen nach spezifischen
                Gesetzestexten, basierend auf den erkannten Paragraphen, werden
                verarbeitet, um die notwendigen Informationen bereitzustellen.
                Die lokale Verarbeitung durch ParaScout sowie der selektive
                Abruf von Gesetzen aus der Firestore Realtime Database sind so
                gestaltet, dass Ihre Privatsphäre und die Sicherheit Ihrer Daten
                stets gewahrt bleiben. Alle Datenverarbeitungsprozesse
                entsprechen den strengen Vorgaben der Datenschutzgrundverordnung
                (DSGVO).
              </p>
            </div>
            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                ParaScout über Tastaturkurzbefehl (Shortcut)
              </h4>
              <p className="text-gray-600">
                Die Nutzung von ParaScout über Tastaturkurzbefehle bietet eine
                schnelle und effiziente Methode, markierte Texte direkt aus der
                Zwischenablage für die Analyse durch ParaScout zu verwenden.
                Diese Datenschutzrichtlinie erläutert, wie wir dabei Ihre Daten
                schützen und Ihre Privatsphäre wahren. Wenn Sie ParaScout über
                einen Tastaturkurzbefehl nutzen, wird der markierte Text, der
                sich in Ihrer Zwischenablage befindet, lokal auf Ihrem Gerät
                durch den ParaScout-Algorithmus analysiert. Diese lokale
                Verarbeitung stellt sicher, dass keine Ihrer Daten an externe
                Server übermittelt oder dort gespeichert werden. Der gesamte
                Prozess erfolgt ausschließlich auf Ihrem Gerät, um die
                Sicherheit und Vertraulichkeit Ihrer Informationen zu
                gewährleisten. Wir speichern oder übermitteln keine
                Informationen über die von Ihnen markierten Texte oder die
                Inhalte Ihrer Zwischenablage. Die Nutzung von ParaScout über
                Tastaturkurzbefehle ist so konzipiert, dass Ihre Daten zu keinem
                Zeitpunkt unsere lokalen Verarbeitungsgrenzen verlassen. Dies
                gewährleistet ein hohes Maß an Datenschutz und Sicherheit.
              </p>
            </div>
          </div>
        </div>
        {/* 4. */}
        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Registrierung und Anmeldung
            </h3>
            <p className="text-gray-600">
              Mit der Registrierung oder Anmeldung berechtigen Nutzer diese
              Anwendung, sie zu identifizieren und ihnen Zugriff auf spezifische
              Dienste zu gewähren. Je nachdem, was im Folgenden angegeben ist,
              können Drittanbieter Registrierungs- und Anmeldedienste
              bereitstellen. In diesem Fall kann diese Anwendung auf einige von
              diesen Drittanbietern gespeicherten Daten zu Registrierungs- oder
              Identifizierungszwecken zugreifen. Einige der unten aufgeführten
              Dienste erheben möglicherweise personenbezogene Daten zu
              Targeting- und Profilingszwecken. Weitere Informationen dazu
              entnehmen Sie der Beschreibung eines jeden Dienstes.
            </p>
            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                Firebase Authentication
              </h4>
              <p className="text-gray-600">
                Firebase Authentication ist ein von Google LLC oder von Google
                Ireland Limited, je nachdem, wie der Anbieter die
                Datenverarbeitung verwaltet, bereitgestellter Registrierungs-
                und Anmeldedienst. Um den Anmelde- und Anmeldeprozess zu
                vereinfachen, kann Firebase Authentication Identitätsdienste von
                Drittparteien benutzen und die Informationen auf ihrer Plattform
                speichern. Verarbeitete personenbezogene Daten: E-Mail;
                Nachname; Vorname. Verarbeitungsort: Deutschland –
                Datenschutzerklärung; Deutschland – Datenschutzerklärung.
              </p>
            </div>
            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                Nutzerdaten
              </h4>
              <p className="text-gray-600">
                Unsere App sammelt und speichert Informationen bezüglich der
                Hochschule, des Studentenstatus oder des Berufs unserer Nutzer
                mit dem Ziel, die Nutzererfahrung kontinuierlich zu verbessern.
                Diese Datenschutzrichtlinie beschreibt den Umgang mit diesen
                Daten und unser Engagement für den Datenschutz. Die
                Informationen über Hochschule, Studentenstatus oder Beruf werden
                ausschließlich zu Analysezwecken verwendet, um ein besseres
                Verständnis für das Nutzungsverhalten unserer Nutzer zu
                erlangen. Dies hilft uns, Funktionen, Inhalte und die allgemeine
                Ausrichtung der App gezielt auf die Bedürfnisse unserer
                Nutzergemeinschaft abzustimmen und zu optimieren. Die erfassten
                Informationen werden so lange gespeichert, wie der Nutzer ein
                aktives Nutzerkonto bei uns hat. Dies ermöglicht es uns, die App
                und ihre Funktionen kontinuierlich zu verbessern und anzupassen,
                solange der Nutzer unsere Dienste in Anspruch nimmt. Bei
                Löschung des Nutzerkontos werden die zugehörigen
                personenbezogenen Daten ebenfalls gelöscht, es sei denn, es
                besteht eine gesetzliche Aufbewahrungspflicht, die eine längere
                Speicherung erfordert. Wir verpflichten uns zum Schutz der
                Privatsphäre unserer Nutzer und zur Sicherheit ihrer Daten. Alle
                personenbezogenen Informationen werden unter Einsatz modernster
                Sicherheitstechnologien geschützt, um unbefugten Zugriff,
                Verlust oder Missbrauch zu verhindern.
              </p>
            </div>
          </div>
        </div>
        {/* 5. */}
        <div className="space-y-6 mt-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Überwachung der Infrastruktur
            </h3>
            <p className="text-gray-600">
              Mit dieser Art von Diensten kann diese Anwendung zur Verbesserung
              der Leistung, des Betriebs, der Wartung und der Fehlersuche die
              Nutzung und das Verhalten ihrer einzelnen Bestandteile überwachen.
              Welche personenbezogenen Daten verarbeitet werden, hängt von den
              Eigenschaften und der Art der Ausführung der Dienste ab, deren
              Funktion das Filtern der über diese Anwendung stattfindenden
              Aktivitäten ist.
            </p>
            <div className="mb-2 mt-4">
              <h4 className="text-lg font-semibold  text-gray-600">
                Crashlytics (Google Ireland Limited)
              </h4>
              <p className="text-gray-600">
                Crashlytics ist ein von Google Ireland Limited, bereitgestellter
                Dienst für die Überwachung von Applikationen. Verarbeitete
                personenbezogene Daten: Crash-Daten; Geräteinformationen;
                Universally Unique Identifier (UUID). Verarbeitungsort: Irland –
                Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Weitere Informationen für Nutzer
          </h2>
        </div>
        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Rechtsgrundlagen der Verarbeitung
            </h3>
            <p className="mb-4">
              Der Anbieter darf personenbezogene Daten von Nutzern nur dann
              verarbeiten, wenn einer der folgenden Punkte zutrifft:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li className="text-gray-600">
                Die Nutzer haben ihre Einwilligung für einen oder mehrere
                bestimmte Zwecke erteilt. Hinweis: In einigen Gesetzgebungen
                kann es dem Anbieter gestattet sein, personenbezogene Daten zu
                verarbeiten, bis der Nutzer einer solchen Verarbeitung
                widerspricht („Opt-out“), ohne sich auf die Einwilligung oder
                eine andere der folgenden Rechtsgrundlagen verlassen zu müssen.
                Dies gilt jedoch nicht, wenn die Verarbeitung personenbezogener
                Daten dem europäischen Datenschutzrecht unterliegt;
              </li>
              <li className="text-gray-600">
                die Datenerhebung ist für die Erfüllung eines Vertrages mit dem
                Nutzer und/oder für vorvertragliche Maßnahmen daraus
                erforderlich;
              </li>
              <li className="text-gray-600">
                die Verarbeitung ist für die Erfüllung einer rechtlichen
                Verpflichtung, der der Anbieter unterliegt, erforderlich;
              </li>
              <li className="text-gray-600">
                die Verarbeitung steht im Zusammenhang mit einer Aufgabe, die im
                öffentlichen Interesse oder in Ausübung hoheitlicher Befugnisse,
                die dem Anbieter übertragen wurden, durchgeführt wird;
              </li>
              <li className="text-gray-600">
                die Verarbeitung ist zur Wahrung der berechtigten Interessen des
                Anbieters oder eines Dritten erforderlich.
              </li>
            </ul>
            <p className="mb-4 text-gray-600">
              In jedem Fall erteilt der Anbieter gerne Auskunft über die
              konkrete Rechtsgrundlage, auf der die Verarbeitung beruht,
              insbesondere darüber, ob die Angabe personenbezogener Daten eine
              gesetzliche oder vertragliche Verpflichtung oder eine
              Voraussetzung für den Abschluss eines Vertrages ist.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Weitere Informationen zur Verweildauer
            </h3>
            <p className="mb-4 text-gray-600">
              Sofern in diesem Dokument nicht anderweitig festgelegt, werden
              personenbezogene Daten so lange verarbeitet und gespeichert, wie
              es der Zweck erfordert, zu dem sie erhoben wurden, und können ggf.
              aufgrund einer zu erfüllenden rechtlichen Verpflichtung oder
              basierend auf der Einwilligung des Nutzers auch länger aufbewahrt
              werden. Daher gilt:
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>
                Personenbezogene Daten, die zu Zwecken der Erfüllung eines
                zwischen dem Anbieter und dem Nutzer geschlossenen Vertrages
                erhoben werden, werden bis zur vollständigen Erfüllung dieses
                Vertrages gespeichert.
              </li>
              <li>
                Personenbezogene Daten, die zur Wahrung der berechtigten
                Interessen des Anbieters erhoben werden, werden so lange
                aufbewahrt, wie es zur Erfüllung dieser Zwecke erforderlich ist.
                Nutzer können nähere Informationen über die berechtigten
                Interessen des Anbieters in den entsprechenden Abschnitten
                dieses Dokuments oder durch Kontaktaufnahme zum Anbieter
                erhalten.
              </li>
            </ul>
            <p className="text-gray-600">
              Darüber hinaus ist es dem Anbieter gestattet, personenbezogene
              Daten für einen längeren Zeitraum zu speichern, wenn der Nutzer in
              eine solche Verarbeitung eingewilligt hat, solange die
              Einwilligung nicht widerrufen wird. Darüber hinaus kann der
              Anbieter verpflichtet sein, personenbezogene Daten für einen
              längeren Zeitraum aufzubewahren, wenn dies zur Erfüllung einer
              gesetzlichen Verpflichtung oder auf Anordnung einer Behörde
              erforderlich ist. Nach Ablauf der Aufbewahrungsfrist werden
              personenbezogene Daten gelöscht. Daher können das Auskunftsrecht,
              das Recht auf Löschung, das Recht auf Berichtigung und das Recht
              auf Datenübertragbarkeit nach Ablauf der Aufbewahrungsfrist nicht
              geltend gemacht werden.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              Die Rechte der Nutzer
            </h3>
            <p className="mb-4 text-gray-600">
              Die Nutzer können bestimmte Rechte in Bezug auf ihre vom Anbieter
              verarbeiteten Daten ausüben. Nutzer haben im gesetzlich zulässigen
              Umfang insbesondere das Recht, Folgendes zu tun:
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>
                Die Einwilligungen jederzeit widerrufen. Hat der Nutzer zuvor in
                die Verarbeitung personenbezogener Daten eingewilligt, so kann
                er die eigene Einwilligung jederzeit widerrufen.
              </li>
              <li>
                Widerspruch gegen die Verarbeitung ihrer Daten einlegen. Der
                Nutzer hat das Recht, der Verarbeitung seiner Daten zu
                widersprechen, wenn die Verarbeitung auf einer anderen
                Rechtsgrundlage als der Einwilligung erfolgt.
              </li>
              <li>
                Auskunft bezüglich ihrer Daten erhalten. Der Nutzer hat das
                Recht zu erfahren, ob die Daten vom Anbieter verarbeitet werden,
                über einzelne Aspekte der Verarbeitung Auskunft zu erhalten und
                eine Kopie der Daten zu erhalten.
              </li>
              <li>
                Überprüfen und berichtigen lassen. Der Nutzer hat das Recht, die
                Richtigkeit seiner Daten zu überprüfen und deren Aktualisierung
                oder Berichtigung zu verlangen.
              </li>
              <li>
                Einschränkung der Verarbeitung ihrer Daten verlangen. Die Nutzer
                haben das Recht, die Verarbeitung ihrer Daten einzuschränken. In
                diesem Fall wird der Anbieter die Daten zu keinem anderen Zweck
                als der Speicherung verarbeiten.
              </li>
              <li>
                Löschung oder anderweitiges Entfernen der personenbezogenen
                Daten verlangen. Die Nutzer haben das Recht, vom Anbieter die
                Löschung ihrer Daten zu verlangen.
              </li>
              <li>
                hre Daten erhalten und an einen anderen Verantwortlichen
                übertragen lassen. Der Nutzer hat das Recht, seine Daten in
                einem strukturierten, gängigen und maschinenlesbaren Format zu
                erhalten und, sofern technisch möglich, ungehindert an einen
                anderen Verantwortlichen übermitteln zu lassen.
              </li>
              <li>
                Beschwerde einreichen. Die Nutzer haben das Recht, eine
                Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
              </li>
            </ul>
            <p className="text-gray-600 font-semibold mb-2">
              Details zum Widerspruchsrecht bezüglich der Verarbeitung
            </p>
            <p className="text-gray-600 font-semibold mb-2">
              Werden personenbezogene Daten im öffentlichen Interesse, in
              Ausübung eines dem Anbieter übertragenen hoheitlichen Befugnisses
              oder zur Wahrung der berechtigten Interessen des Anbieters
              verarbeitet, kann der Nutzer dieser Verarbeitung widersprechen,
              indem er einen Rechtfertigungsgrund angibt, der sich auf seine
              besondere Situation bezieht.
            </p>
            <p className="text-gray-600 font-semibold mb-2">
              Nutzer werden darüber informiert, dass sie der Verarbeitung der
              personenbezogenen Daten für Direktwerbung jederzeit unentgeltlich
              ohne Angabe von Gründen widersprechen können. Widerspricht der
              Nutzer der Verarbeitung für Zwecke der Direktwerbung, so werden
              die personenbezogenen Daten nicht mehr für diese Zwecke
              verarbeitet. Ob der Anbieter personenbezogene Daten für
              Direktwerbungszwecke verarbeitet, können die Nutzer den
              entsprechenden Abschnitten dieses Dokuments entnehmen.
            </p>
            <p className="text-gray-600 font-semibold mb-2">
              Wie die Rechte ausgeübt werden können
            </p>
            <p className="text-gray-600  mb-4">
              Alle Anfragen zur Ausübung der Nutzerrechte können über die in
              diesem Dokument angegebenen Kontaktdaten an den Anbieter gerichtet
              werden. Diese Anfragen können kostenlos gestellt werden und werden
              vom Anbieter so früh wie möglich, spätestens innerhalb eines
              Monats, beantwortet und den Nutzern die gesetzlich
              vorgeschriebenen Informationen zur Verfügung gestellt. Jede
              Berichtigung oder Löschung personenbezogener Daten oder die
              Einschränkung der Verarbeitung teilt der Anbieter allen
              Empfängern, denen personenbezogene Daten offengelegt wurden, mit,
              falls es welche gibt. Es sei denn, dies erweist sich als unmöglich
              oder ist mit einem unverhältnismäßigen Aufwand verbunden. Der
              Anbieter unterrichtet den Nutzer über diese Empfänger, wenn der
              Nutzer dies verlangt.
            </p>
            <hr className="border-t border-gray-300 mt-8" />
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">
                Weitere Informationen über die Erhebung und Verarbeitung von
                Daten
              </h2>
              <h3 className="text-xl font-semibold mb-2 mt-8">
                Rechtliche Maßnahmen
              </h3>
              <p className="mb-4 text-gray-600">
                Die personenbezogenen Daten des Nutzers können vom Anbieter zu
                Zwecken der Rechtsdurchsetzung innerhalb oder in Vorbereitung
                gerichtlicher Verfahren verarbeitet werden, die sich daraus
                ergeben, dass diese Anwendung oder die dazugehörigen Dienste
                nicht ordnungsgemäß genutzt wurden. Der Nutzer erklärt, sich
                dessen bewusst zu sein, dass der Anbieter von den Behörden zur
                Herausgabe von personenbezogenen Daten verpflichtet werden
                könnte.
              </p>
              <h3 className="text-xl font-semibold mb-2 mt-8">
                Weitere Informationen über die personenbezogenen Daten des
                Nutzers
              </h3>
              <p className="mb-4 text-gray-600">
                Zusätzlich zu den in dieser Datenschutzerklärung aufgeführten
                Informationen kann diese Anwendung dem Nutzer auf Anfrage
                weitere kontextbezogene Informationen zur Verfügung stellen, die
                sich auf bestimmte Dienste oder auf die Erhebung und
                Verarbeitung personenbezogener Daten beziehen.
              </p>
              <h3 className="text-xl font-semibold mb-2 mt-8">
                Systemprotokolle und Wartung
              </h3>
              <p className="mb-4 text-gray-600">
                Diese Anwendung und die Dienste von Dritten können zu Betriebs-
                und Wartungszwecken Dateien erfassen, die die über diese
                Anwendung stattfindende Interaktion aufzeichnen
                (Systemprotokolle), oder andere personenbezogene Daten (z. B.
                IP-Adresse) zu diesem Zweck verwenden.
              </p>
              <h3 className="text-xl font-semibold mb-2 mt-8">
                Nicht in dieser Datenschutzerklärung enthaltene Informationen
              </h3>
              <p className="mb-4 text-gray-600">
                Weitere Informationen über die Erhebung oder Verarbeitung
                personenbezogener Daten können jederzeit vom Anbieter über die
                aufgeführten Kontaktangaben angefordert werden.
              </p>
              <h3 className="text-xl font-semibold mb-2 mt-8">
                Änderungen dieser Datenschutzerklärung
              </h3>
              <p className="mb-4 text-gray-600">
                Der Anbieter behält sich vor, jederzeit Änderungen an dieser
                Datenschutzerklärung vorzunehmen, indem Nutzer auf dieser Seite
                und gegebenenfalls über diese Anwendung und/oder - soweit
                technisch und rechtlich möglich – durch das Versenden einer
                Mitteilung über dem Anbieter vorliegende Kontaktdaten der Nutzer
                informiert werden. Nutzern wird daher nahegelegt, diese Seite
                regelmäßig aufzurufen und insbesondere das am Seitenende
                angegebene Datum der letzten Änderung zu prüfen. Soweit
                Änderungen eine auf der Einwilligung des Nutzers basierte
                Datennutzung betreffen, so wird der Anbieter - soweit
                erforderlich - eine neue Einwilligung einholen.
              </p>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 mt-8" />
      </section>
      <Footer />
    </div>
  );
}

function ContactIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

import { FaMagic } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { LuBrainCircuit } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";

export const phrases = [
  "ParaScout erkennt Paragrafen in deiner PDF",
  "Gesetztestexte direkt als Pop-up",
  "Plugin für deinen Webbrowser",
  "Command + X für ParaScout in jedem Textfeld",
  "Notieren, Makrieren & Kommentieren direkt in DEINEM Gesetzbuch",
];

export type PageConstantsType = typeof phrases;

// Start Parameters
export const cardPositions = [
  { top: "-15%", left: "-75%" }, // Oben Links
  { top: "-15%", right: "-75%" }, // Oben Rechts
  { bottom: "-25%", left: "-75%" }, // Unten Links
  { bottom: "-25%", right: "-75%" }, // Unten Rechts
];

export const Paragraphen = [
  {
    Header: "§ 3 StGB Geltung für Inlandstaten",
    Body: [
      "Das deutsche Strafrecht gilt für Taten, die im Inland begangen werden.",
    ],
  },
  {
    Header: "§ 57 StGB Aussetzung des Strafrestes bei zeitiger Freiheitsstrafe",
    Body: [
      {
        SubHeader:
          "(1) Das Gericht setzt die Vollstreckung des Restes einer zeitigen Freiheitsstrafe zur Bewährung aus, wenn",
        SubBody: [
          "1. zwei Drittel der verhängten Strafe, mindestens jedoch zwei Monate, verbüßt sind,",
          "2. dies unter Berücksichtigung des Sicherheitsinteresses der Allgemeinheit verantwortet werden kann, und",
          "3. die verurteilte Person einwilligt.",
        ],
      },
      {
        SubHeader:
          "(2) Schon nach Verbüßung der Hälfte einer zeitigen Freiheitsstrafe, mindestens jedoch von sechs Monaten, kann das Gericht die Vollstreckung des Restes zur Bewährung aussetzen, wenn",
        SubBody: [
          "1. die verurteilte Person erstmals eine Freiheitsstrafe verbüßt und diese zwei Jahre nicht übersteigt oder",
          "2. die Gesamtwürdigung von Tat, Persönlichkeit der verurteilten Person und ihrer Entwicklung während des Strafvollzugs ergibt, daß besondere Umstände vorliegen,",
        ],
      },
      {
        SubHeader:
          "(3) Die §§ 56a bis 56e gelten entsprechend; die Bewährungszeit darf, auch wenn sie nachträglich verkürzt wird, die Dauer des Strafrestes nicht unterschreiten. Hat die verurteilte Person mindestens ein Jahr ihrer Strafe verbüßt, bevor deren Rest zur Bewährung ausgesetzt wird, unterstellt sie das Gericht in der Regel für die Dauer oder einen Teil der Bewährungszeit der Aufsicht und Leitung einer Bewährungshelferin oder eines Bewährungshelfers.",
        SubBody: [""],
      },
      {
        SubHeader:
          "(4) Soweit eine Freiheitsstrafe durch Anrechnung erledigt ist, gilt sie als verbüßte Strafe im Sinne der Absätze 1 bis 3.",
        SubBody: [""],
      },
      {
        SubHeader:
          "(5) Die §§ 56f und 56g gelten entsprechend. Das Gericht widerruft die Strafaussetzung auch dann, wenn die verurteilte Person in der Zeit zwischen der Verurteilung und der Entscheidung über die Strafaussetzung eine Straftat begangen hat, die von dem Gericht bei der Entscheidung über die Strafaussetzung aus tatsächlichen Gründen nicht berücksichtigt werden konnte und die im Fall ihrer Berücksichtigung zur Versagung der Strafaussetzung geführt hätte; als Verurteilung gilt das Urteil, in dem die zugrunde liegenden tatsächlichen Feststellungen letztmals geprüft werden konnten.",
        SubBody: [""],
      },
      {
        SubHeader:
          "(6) Das Gericht kann davon absehen, die Vollstreckung des Restes einer zeitigen Freiheitsstrafe zur Bewährung auszusetzen, wenn die verurteilte Person unzureichende oder falsche Angaben über den Verbleib von Gegenständen macht, die der Einziehung von Taterträgen unterliegen.",
        SubBody: [""],
      },
      {
        SubHeader:
          "(7) Das Gericht kann Fristen von höchstens sechs Monaten festsetzen, vor deren Ablauf ein Antrag der verurteilten Person, den Strafrest zur Bewährung auszusetzen, unzulässig ist.",
        SubBody: [""],
      },
    ],
  },
  {
    Header:
      "§ 4 StGB Geltung für Taten auf deutschen Schiffen und Luftfahrzeugen",
    Body: [
      "Das deutsche Strafrecht gilt, unabhängig vom Recht des Tatorts, für Taten, die auf einem Schiff oder in einem Luftfahrzeug begangen werden, das berechtigt ist, die Bundesflagge oder das Staatszugehörigkeitszeichen der Bundesrepublik Deutschland zu führen.",
    ],
  },
  {
    Header: "§ 5 StGB Auslandstaten mit besonderem Inlandsbezug",
    Body: [
      "Das deutsche Strafrecht gilt, unabhängig vom Recht des Tatorts, für folgende Taten, die im Ausland begangen werden:",
      {
        SubHeader: "1. (weggefallen)",
        SubBody: [""],
      },
      {
        SubHeader: "2. Hochverrat (§§ 81 bis 83);",
        SubBody: [""],
      },
      {
        SubHeader: "3. Gefährdung des demokratischen Rechtsstaates",
        SubBody: [
          "a) in den Fällen des § 86 Absatz 1 und 2, wenn Propagandamittel im Inland wahrnehmbar verbreitet oder der inländischen Öffentlichkeit zugänglich gemacht werden und der Täter Deutscher ist oder seine Lebensgrundlage im Inland hat,",
          "b) in den Fällen des § 86a Absatz 1 Nummer 1, wenn ein Kennzeichen im Inland wahrnehmbar verbreitet oder in einer der inländischen Öffentlichkeit zugänglichen Weise oder in einem im Inland wahrnehmbar verbreiteten Inhalt (§ 11 Absatz 3) verwendet wird und der Täter Deutscher ist oder seine Lebensgrundlage im Inland hat,",
          "c) in den Fällen der §§ 89, 90a Abs. 1 und des § 90b, wenn der Täter Deutscher ist und seine Lebensgrundlage im räumlichen Geltungsbereich dieses Gesetzes hat, und",
          "d) in den Fällen der §§ 90 und 90a Abs. 2;",
        ],
      },
      {
        SubHeader:
          "4. Landesverrat und Gefährdung der äußeren Sicherheit (§§ 94 bis 100a);",
        SubBody: [""],
      },
      {
        SubHeader: "5. Straftaten gegen die Landesverteidigung",
        SubBody: [
          "a) in den Fällen der §§ 109 und 109e bis 109g und",
          "b) in den Fällen der §§ 109a, 109d und 109h, wenn der Täter Deutscher ist und seine Lebensgrundlage im räumlichen Geltungsbereich dieses Gesetzes hat;",
        ],
      },
      {
        SubHeader:
          "5a. Widerstand gegen die Staatsgewalt und Straftaten gegen die öffentliche Ordnung",
        SubBody: [
          "a) in den Fällen des § 111, wenn die Aufforderung im Inland wahrnehmbar ist und der Täter Deutscher ist oder seine Lebensgrundlage im Inland hat",
          "b) in den Fällen des § 127, wenn der Zweck der Handelsplattform darauf ausgerichtet ist, die Begehung von rechtswidrigen Taten im Inland zu ermöglichen oder zu fördern und der Täter Deutscher ist oder seine Lebensgrundlage im Inland hat, und",
          "c) in den Fällen des § 130 Absatz 2 Nummer 1, auch in Verbindung mit Absatz 6, wenn ein in Absatz 2 Nummer 1 oder Absatz 3 bezeichneter Inhalt (§ 11 Absatz 3) in einer Weise, die geeignet ist, den öffentlichen Frieden zu stören, im Inland wahrnehmbar verbreitet oder der inländischen Öffentlichkeit zugänglich gemacht wird und der Täter Deutscher ist oder seine Lebensgrundlage im Inland hat;",
        ],
      },
      {
        SubHeader: "6. Straftaten gegen die persönliche Freiheit",
        SubBody: [
          "a) in den Fällen der §§ 232 bis 233a, wenn",
          "b) in den Fällen der §§ 232 bis 233a, wenn",
          "c) in den Fällen der §§ 232 bis 233a, wenn",
        ],
      },
      {
        SubHeader:
          "7. Verletzung von Betriebs- oder Geschäftsgeheimnissen eines im räumlichen Geltungsbereich dieses Gesetzes liegenden Betriebs, eines Unternehmens, das dort seinen Sitz hat, oder eines Unternehmens mit Sitz im Ausland, das von einem Unternehmen mit Sitz im räumlichen Geltungsbereich dieses Gesetzes abhängig ist und mit diesem einen Konzern bildet;",
        SubBody: [""],
      },
      {
        SubHeader:
          "8. Straftaten gegen die sexuelle Selbstbestimmung in den Fällen des § 174 Absatz 1, 2 und 4, der §§ 176 bis 178 und des § 182, wenn der Täter zur Zeit der Tat Deutscher ist oder seine Lebensgrundlage im Inland hat;",
        SubBody: [""],
      },
      {
        SubHeader: "9. Straftaten gegen das Leben",
        SubBody: [
          "a) in den Fällen des § 218 Absatz 2 Satz 2 Nummer 1 und Absatz 4 Satz 1, wenn der Täter zur Zeit der Tat Deutscher ist oder seine Lebensgrundlage im Inland hat, und",
          "in den übrigen Fällen des § 218, wenn der Täter zur Zeit der Tat Deutscher ist und seine Lebensgrundlage im Inland hat;",
        ],
      },
      {
        SubHeader: "9a Straftaten gegen die körperliche Unversehrtheit",
        SubBody: [
          "a) in den Fällen des § 226 Absatz 1 Nummer 1 in Verbindung mit Absatz 2 bei Verlust der Fortpflanzungsfähigkeit, wenn der Täter zur Zeit der Tat Deutscher ist oder seine Lebensgrundlage im Inland hat, und",
          "b) in den Fällen des § 226a, wenn der Täter zur Zeit der Tat Deutscher ist oder seine Lebensgrundlage im Inland hat oder wenn die Tat sich gegen eine Person richtet, die zur Zeit der Tat ihren Wohnsitz oder gewöhnlichen Aufenthalt im Inland hat;",
        ],
      },
    ],
  },
];

export const ParagraphenForCaroussel = [
  {
    Header: "§ 810 Einsicht in Urkunden",
    Body: [
      "Wer ein rechtliches Interesse daran hat, eine in fremdem Besitz befindliche Urkunde einzusehen, kann von dem Besitzer die Gestattung der Einsicht verlangen, wenn die Urkunde in seinem Interesse errichtet oder in der Urkunde ein zwischen ihm und einem anderen bestehendes Rechtsverhältnis beurkundet ist oder wenn die Urkunde Verhandlungen über ein Rechtsgeschäft enthält, die zwischen ihm und einem anderen oder zwischen einem von beiden und einem gemeinschaftlichen Vermittler gepflogen worden sind.",
    ],
  },
  {
    Header: "§ 811 Vorlegungsort, Gefahr und Kosten",
    Body: [
      "(1) Die Vorlegung hat in den Fällen der §§ 809, 810 an dem Orte zu erfolgen, an welchem sich die vorzulegende Sache befindet. Jeder Teil kann die Vorlegung an einem anderen Orte verlangen, wenn ein wichtiger Grund vorliegt.",
      "(2) Die Gefahr und die Kosten hat derjenige zu tragen, welcher die Vorlegung verlangt. Der Besitzer kann die Vorlegung verweigern, bis ihm der andere Teil die Kosten vorschießt und wegen der Gefahr Sicherheit leistet.",
    ],
  },
  {
    Header: "§ 812 BGB Herausgabeanspruch",
    Body: [
      "(1) Wer durch die Leistung eines anderen oder in sonstiger Weise auf dessen Kosten etwas ohne rechtlichen Grund erlangt, ist ihm zur Herausgabe verpflichtet. Diese Verpflichtung besteht auch dann, wenn der rechtliche Grund später wegfällt oder der mit einer Leistung nach dem Inhalt des Rechtsgeschäfts bezweckte Erfolg nicht eintritt.",
      "(2) Als Leistung gilt auch die durch Vertrag erfolgte Anerkennung des Bestehens oder des Nichtbestehens eines Schuldverhältnisses.",
    ],
  },
  {
    Header: "§ 813 Erfüllung trotz Einrede",
    Body: [
      "(1) Das zum Zwecke der Erfüllung einer Verbindlichkeit Geleistete kann auch dann zurückgefordert werden, wenn dem Anspruch eine Einrede entgegenstand, durch welche die Geltendmachung des Anspruchs dauernd ausgeschlossen wurde. Die Vorschrift des § 214 Abs. 2 bleibt unberührt.",
      "(2) Wird eine betagte Verbindlichkeit vorzeitig erfüllt, so ist die Rückforderung ausgeschlossen; die Erstattung von Zwischenzinsen kann nicht verlangt werden.",
    ],
  },
  {
    Header: "§ 814 Kenntnis der Nichtschuld",
    Body: [
      "Das zum Zwecke der Erfüllung einer Verbindlichkeit Geleistete kann nicht zurückgefordert werden, wenn der Leistende gewusst hat, dass er zur Leistung nicht verpflichtet war, oder wenn die Leistung einer sittlichen Pflicht oder einer auf den Anstand zu nehmenden Rücksicht entsprach.",
    ],
  },
];

export const Sachverhalt812 = [
  "hier stellt sich die Frage, ob U",
  "Aufwendungsersatz nach §§ 683 S.",
  "1, 670 BGB verlangen kann oder ob",
  "er auf die Leistungskondiktion",
  "nach",
  "verweisen ist.",
];

export const cardContents = [
  {
    icon: <FaMagic className="w-7 h-7" />,
    title: "Magische Gesetzessuche",
    description:
      "Optimieren dein juristische Recherche mit Paranote:  Erlebe, wie du mit unserem Tool aus jedem Dokument sofort relevante Gesetzesverweise extrahieren kannst, um genau die juristischen Informationen zu erhalten, die du benötigst.",
  },
  {
    icon: <LuBrainCircuit className="w-7 h-7" />,
    title: "Intuitive Notizorganisation",
    description:
      "Organisiere deine Arbeitsunterlagen mit Leichtigkeit. Entdecke, wie Paranote deine Gedanken und Ideen nahtlos strukturiert.",
  },
  {
    icon: <GoLaw className="w-7 h-7" />,
    title: "Digitale Rechtsbibliothek",
    description:
      "Tauche ein in das Zeitalter der digitalen Gesetzesrecherche mit unserer umfassenden Gesetzesdatenbank. Ob online oder offline, greife immer auf all deine Gesetze zu.",
  },
  {
    icon: <AiOutlineThunderbolt className="w-7 h-7" />,
    title: "Effizienz neu definiert",
    description:
      "Mit Paranote verwandelst du die Herausforderung, juristische Texte zu durchforsten, in einen effizienten und stressfreien Prozess. Deine Zeit ist uns das Wichtigste.",
  },
];

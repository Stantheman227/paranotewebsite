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
    Header: "§ 821 Einrede der Bereicherung",
    Body: [
      "Wer ohne rechtlichen Grund eine Verbindlichkeit eingeht, kann die Erfüllung auch dann verweigern, wenn der Anspruch auf Befreiung von der Verbindlichkeit verjährt ist.",
    ],
  },
  {
    Header: "§ 781 Schuldanerkenntnis",
    Body: [
      "Zur Gültigkeit eines Vertrags, durch den das Bestehen eines Schuldverhältnisses anerkannt wird (Schuldanerkenntnis), ist schriftliche Erteilung der Anerkennungserklärung erforderlich. Die Erteilung der Anerkennungserklärung in elektronischer Form ist ausgeschlossen. Ist für die Begründung des Schuldverhältnisses, dessen Bestehen anerkannt wird, eine andere Form vorgeschrieben, so bedarf der Anerkennungsvertrag dieser Form.",
    ],
  },
  {
    Header: "§ 364 Annahme an Erfüllungs statt",
    Body: [
      {
        SubHeader: "",
        SubBody: [
          "(1) Das Schuldverhältnis erlischt, wenn der Gläubiger eine andere als die geschuldete Leistung an Erfüllungs statt annimmt",
          "(2) Übernimmt der Schuldner zum Zwecke der Befriedigung des Gläubigers diesem gegenüber eine neue Verbindlichkeit, so ist im Zweifel nicht anzunehmen, dass er die Verbindlichkeit an Erfüllungs statt übernimmt.",
        ],
      },
    ],
  },
  {
    Header: "§ 242 Leistung nach Treu und Glauben",
    Body: [
      "Der Schuldner ist verpflichtet, die Leistung so zu bewirken, wie Treu und Glauben mit Rücksicht auf die Verkehrssitte es erfordern.",
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

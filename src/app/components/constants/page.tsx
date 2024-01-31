export const cards = [
  {
    title: "Automatische Paragrafen",
    iconType: "ArrowPathRoundedSquare",
    description:
      "Paragrafen werden automatisch in PDF Dateien gelesen, extrahiert und als Pop-ups neben dem Readerangezeigt.",
    position: 1,
  },
  {
    title: "Personalisiertes Gesetzbuch",
    iconType: "PaintBrush",
    description:
      "Erstellen dein eigenes Gesetzbuch mit personalisierten Notizen und Markierungen.",
    position: 2,
  },
  {
    title: "Alle Gesetze",
    iconType: "BookOpen",
    description:
      "Zugriff auf eine umfassende Sammlung aller aktuellen Gesetze und Verordnungen.",
    position: 3,
  },
  {
    title: "Offline Verfügbarkeit",
    iconType: "Wifi",
    description:
      "Greife auch ohne Internetverbindung auf alle Funktionen und Gesetze zu.",
    position: 4,
  },
];

export const phrases = [
  "Automatische Erkennung von Paragrafen in PDF Dateien",
  "Extrahierter Gesetztestext direkt als Pop-up neben dem Reader",
  "Plugin erweiterung für deinen Webbrowser",
  "Command + X für ParaScout in jedem Text", // EVTL. GIF erstellen für button press
  "Notieren, Makrieren & Kommentieren direkt in DEINEM Gesetzbuch",
  "Möglichkeit, eigene Fälle und Lösungen zu speichern und zu teilen",
];

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
    Header: "§ 4 StGB Geltung für Taten auf deutschen Schiffen und Luftfahrzeugen",
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


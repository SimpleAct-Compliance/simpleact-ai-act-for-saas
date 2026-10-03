# Was Enterprise-Kunden verlangen

Unabhängig von der Verordnung, und meist früher als jede Behörde: Ihre Geschäftskunden haben eigene Pflichten und holen die Angaben bei Ihnen. Das ist für ein SaaS-Produkt der wirtschaftlich relevanteste Teil der Compliance-Arbeit.

## Die vier Fragen, die in jeder Beschaffungsprüfung kommen

1. **Welche Funktionen des Produkts verwenden KI?**
2. **Welches Modell liegt zugrunde, von wem, in welcher Version?**
3. **Werden unsere Daten zum Training verwendet — und wo steht das?**
4. **Wie erfahren wir von Änderungen am Modell?**

Wer darauf keine belegbare Antwort hat, verliert Abschlüsse, bevor ein Prüfer auftaucht. Und wer sie zwanzigmal einzeln beantwortet, hat zwanzigmal die Arbeit.

**Die wirtschaftlichste Einzelmaßnahme:** eine Seite, die diese vier Fragen beantwortet, mit Fundstellen, mit Stand und Prüfdatum. Sie erspart die Einzelbeantwortung und wirkt im Verkauf als Unterscheidungsmerkmal.

## Was darüber hinaus gefragt wird

| Frage | Woraus sie kommt |
|---|---|
| AVV mit Unterauftragsverarbeiterliste | Art. 28 DSGVO |
| Verarbeitungsort, Drittlandübermittlung, SCC | Art. 44 ff. DSGVO |
| technische und organisatorische Maßnahmen | Art. 32 DSGVO |
| Löschkonzept, auch für Modelleingaben | Art. 17 DSGVO |
| Protokollzugang für eigene Nachweise | Art. 26 AI Act, beim Kunden |
| Zugang zu Kennzahlen über geänderte Ausgaben | Art. 14 AI Act, beim Kunden |
| Information bei Vorfällen, mit Frist | Art. 33 DSGVO, Art. 73 AI Act |
| Rollen- und Rechteverwaltung, SSO | Zugangskontrolle beim Kunden |
| Exportmöglichkeit der Registerdaten | Nachweisführung beim Kunden |

Die Zeilen 5 und 6 werden von Anbietern unterschätzt. Ihr Kunde muss belegen, dass er Aufsicht ausübt — und wenn Ihr Produkt die Zahl der geänderten Ausgaben nicht ausweist, muss er schätzen. In einer Prüfung ist das sein Problem und im Beschaffungsgespräch Ihres.

## Zwei Zahlen, die Ihr Produkt liefern sollte

| Kennzahl | Wofür der Kunde sie braucht |
|---|---|
| **geänderte oder verworfene Ausgaben je Zeitraum**, je Mandant | Nachweis für Art. 14 |
| **Modellversion je Zeitraum**, je Mandant | zeitliche Zuordnung aller Nachweise |

Beides ist technisch klein und als Produktmerkmal wertvoll. Die zweite Zahl ist außerdem Ihr eigener Nachweis für den Änderungsverlauf.

## Vorfallinformation: zwei Fristen, die nicht vermengt werden dürfen

| | Art. 73 AI Act | Art. 33 DSGVO |
|---|---|---|
| Gegenstand | schwerwiegender Vorfall bei einem Hochrisikosystem | Verletzung des Schutzes personenbezogener Daten |
| Pflichtig | Anbieter | Verantwortlicher — Ihr **Kunde** |
| Adressat | Marktüberwachungsbehörde | Datenschutzaufsicht |
| Frist | gestaffelt nach Art des Vorfalls | **72 Stunden ab Kenntnis** |

Für Sie als Auftragsverarbeiter folgt daraus eine vertragliche Pflicht: Ihr Kunde kann seine 72 Stunden nur halten, wenn Sie **unverzüglich** melden. Eine Vertragsklausel mit „innerhalb von fünf Werktagen" macht die Frist beim Kunden unhaltbar, und ein aufmerksamer Einkauf streicht sie.

Was eine brauchbare Meldeklausel leistet: unverzügliche Meldung, ein benannter Kanal, und eine Mindestangabe darüber, was gemeldet wird.

Ausführlich: [Datenschutzverletzungen](https://github.com/SimpleAct-Compliance/simpleact-gdpr-data-breach-management) · [Vorfallmanagement](https://github.com/SimpleAct-Compliance/simpleact-incident-management)

## Schnittstellen: was Kunden tatsächlich brauchen

Nicht jede Integration erhöht den Nutzen. Vier, die in Compliance-Kontexten gefragt werden:

| Schnittstelle | Zweck beim Kunden |
|---|---|
| Export des Funktions- und Modellregisters | Übernahme ins eigene KI-Inventar |
| Protokollexport, filterbar nach Zeitraum | Nachweisführung |
| Ereignismeldung (Webhook) bei Modellwechsel | Auslöser für die eigene Neubewertung |
| Rollen- und Rechteverwaltung, SSO | Zugangskontrolle |

Die dritte ist die, die am wenigsten verbreitet ist und am meisten löst: Sie macht aus dem stillen Modellwechsel beim Kunden ein Ereignis, auf das er reagieren kann.

Dazu: [Integrationen](https://github.com/SimpleAct-Compliance/simpleact-integrations-apis)

## Was Sie nicht versprechen sollten

Drei Zusagen, die in Verträgen vorkommen und nicht haltbar sind:

| Zusage | Warum nicht haltbar |
|---|---|
| „unser Produkt ist AI-Act-konform" | Konformität bezieht sich auf ein System in einer Verwendung, nicht auf ein Produkt |
| „keine Halluzinationen" | technisch nicht zusicherbar |
| „der Kunde hat keine eigenen Pflichten" | Betreiberpflichten entstehen beim Kunden, nicht bei Ihnen |

Die erste ist die verbreitetste und die gefährlichste, weil sie beim Kunden eine Erwartung erzeugt, die seine eigene Bewertung ersetzen soll. Die ehrliche Formulierung lautet: Diese Funktion ist für diesen Zweck so eingestuft, mit dieser Begründung, und folgende Angaben stellen wir bereit.

## Weiter

[Abhängigkeit vom Modellanbieter](./provider-dependency-logic.md) · [Das Betriebsmodell](./saas-operating-model.md) · [Funktionsregister](../../templates/saas-feature-inventory-template.md)

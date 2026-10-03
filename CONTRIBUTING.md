# Mitwirken

Dieses Repository beschreibt die Lage von Softwareanbietern, kein Produkt. Es lebt davon, dass Leute aus der Praxis widersprechen.

## Besonders willkommen

- **Erfahrungen mit stillen Modellwechseln**: was sich geändert hat, woran Sie es bemerkt haben, wie lange es gedauert hat
- **Testsatz-Erfahrungen**: welche Eingaben ein Signal gegeben haben und welche nicht. Das ist der praktisch nützlichste Beitrag überhaupt
- **Beschaffungsfragen von Kunden**, die hier fehlen — und Antworten, die funktioniert haben
- **Anbieterverhalten**: welche Modellanbieter Versionsangaben, Trainingsdatenangaben oder Zugang zu früheren Versionen bereitstellen und welche nicht
- **Rollenfälle aus der Praxis**: Lagen, in denen die Abgrenzung Anbieter/Betreiber schwierig war
- **Korrekturen an Rechtsbezügen** — mit Fundstelle
- **Übersetzungen** einzelner Dokumente

Am wertvollsten sind Rückmeldungen zum Releasepunkt: Haben die fünf Fragen in Ihrer Freigabevorlage funktioniert, oder wurden sie umgangen? Und wenn umgangen — woran lag es?

## Weniger hilfreich

- Reine Umformulierungen
- Rechtliche Einschätzungen ohne Fundstelle. Die Rollenfrage bei SaaS ist in Teilen noch nicht ausjudiziert; das gehört als Unsicherheit benannt, nicht als Gewissheit formuliert
- Produktwerbung. Dieses Repository beschreibt ein Problem; das Produkt steht in einer Zeile am Ende des README

Der zweite Punkt ist uns wichtig: Wo die Rechtslage offen ist, steht das hier so — und wer es anders weiß, bringt bitte die Quelle mit.

## Was hier nicht wiederholt wird

Die Einstufung, die Anhang-IV-Dokumentation, das Anbieterregister und das Vorfallmanagement haben eigene Repositories. Dieses verweist darauf; das [Repository-Netz](./docs/repository-network.md) zeigt, wohin ein Beitrag gehört.

## Vorgehen

Kleine Korrekturen gern direkt als Pull Request. Bei größeren Änderungen vorher ein Issue.

`npm run validate` prüft, dass alle Pflichtpfade vorhanden und die JSON-Dateien lesbar sind. Die Prüfung läuft auch in CI.

## Rechtliches

Beiträge stehen unter der MIT-Lizenz dieses Repositories. Inhalte hier sind keine Rechtsberatung; wer eine Fundstelle ändert, gibt bitte die Quelle an.

**Keine Anbieternamen mit Mängeln.** Die Beobachtung, dass ein bestimmter Anbieter Versionsangaben nicht herausgibt, gehört in ein Register mit Quelle und Prüfdatum — nicht als Behauptung in ein Repository. Dafür gibt es [actcomp.de](https://actcomp.de).

## Kodierung

Alle Dateien sind UTF-8. Das klingt selbstverständlich, war es in diesem Repository aber eine Weile nicht — deutsche Umlaute erschienen auf GitHub als Ersatzzeichen. Wer unter Windows arbeitet, prüft das vor dem Commit.

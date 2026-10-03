# Das Netz der Repositories

Dieses Repository behandelt eine **Lage**, keinen Schritt: die eines Softwareanbieters. Es greift deshalb quer in die Schrittfolge ein.

## Wo es eingreift

```
  Inventar -> Einstufung -> Prüfung -> Dokumentation -> Audit -> Betrieb
      ^            ^                        ^                       ^
      |            |                        |                       |
      +------- diese Lage ändert, wer zuständig ist ----------------+
```

| Schritt | Was diese Lage ändert |
|---|---|
| **Inventar** | Einheit ist die **Funktion** im Produkt, nicht das System |
| **Einstufung** | je Funktion, und die Rollenfrage ist nicht trivial |
| **Prüfung** | sie läuft am **Release**, nicht im Jahresturnus |
| **Dokumentation** | drei Abschnitte sind ohne den Modellanbieter nicht füllbar |
| **Betrieb** | der Auslöser kommt vom Zulieferer, nicht aus dem eigenen Haus |

## Die Repositories, die Sie brauchen

| Repository | Wofür in dieser Lage |
|---|---|
| [Anbieterregister](https://github.com/SimpleAct-Compliance/simpleact-model-vendor-register) | die sieben Fragen vor dem Vertrag mit dem Modellanbieter |
| [Risikoeinstufung](https://github.com/SimpleAct-Compliance/simpleact-ai-risk-classification-eu) | je Funktion einstufen, Art. 6 Abs. 3 bewerten |
| [Dokumentationsvorlage](https://github.com/SimpleAct-Compliance/simpleact-ai-act-documentation-template) | Anhang IV, wenn Sie Anbieter sind |
| [Prüfliste AI Act](https://github.com/SimpleAct-Compliance/simpleact-ai-act-checklist) | Nachweiszustände, Mindeststandard für Prüfpunkte |
| [Vorfallmanagement](https://github.com/SimpleAct-Compliance/simpleact-incident-management) | Art. 72 und 73, und die Meldung an Kunden |
| [Integrationen](https://github.com/SimpleAct-Compliance/simpleact-integrations-apis) | Testsatz, Versionsprotokollierung, Webhook bei Modellwechsel |

Das **Anbieterregister** ist für diese Lage das wichtigste: Die Beschaffungsfragen entscheiden, ob Ihre eigene Dokumentation später füllbar ist. Nach Vertragsschluss sind sie schwer nachzuholen.

Das **Integrationen**-Repository ist das praktisch nächstwichtigste, weil die drei Maßnahmen, die ein SaaS-Produkt wirklich schützen — Testsatz, Versionsprotokollierung, Meldung an eine benannte Person — technische Maßnahmen sind, keine organisatorischen.

## Weniger relevant

| Repository | Warum |
|---|---|
| [KI-Inventar](https://github.com/SimpleAct-Compliance/simpleact-ai-system-inventory) | beschreibt die Suche in einem Anwenderunternehmen; bei SaaS ist die Suche einfacher, siehe [Funktionsregister](../knowledge-base/eu-ai-act/inventory-and-governance.md) |
| [Einstieg EU AI Act](https://github.com/SimpleAct-Compliance/simpleact-ai-act-compliance-guide) | für Anwenderunternehmen gedacht; die Reihenfolge ist dort anders |

Diese Zeilen stehen hier, damit niemand Zeit mit Material verbringt, das für seine Lage nicht geschrieben ist.

Für die **eigene interne** KI-Nutzung sind beide allerdings zutreffend: Dort sind Sie Betreiber wie jedes andere Unternehmen.

## Datenschutzseite

Als Auftragsverarbeiter Ihrer Kunden berührt Sie die DSGVO unmittelbar, und zwar früher als die KI-Verordnung — meist im Beschaffungsgespräch.

| Repository | Für |
|---|---|
| [DSGVO-Grundlagen](https://github.com/SimpleAct-Compliance/simpleact-gdpr-compliance-workspace) | Art. 28, Unterauftragsverarbeiter, TOMs |
| [Datenschutzverletzungen](https://github.com/SimpleAct-Compliance/simpleact-gdpr-data-breach-management) | die Meldekette zum Kunden, der seine 72 Stunden halten muss |
| [DSFA und FRIA](https://github.com/SimpleAct-Compliance/simpleact-dpia-dsfa-workflow) | wenn Kunden Angaben für ihre eigene Folgenabschätzung brauchen |

## Übergreifend

[Governance-Rahmenwerk](https://github.com/SimpleAct-Compliance/simpleact-ai-governance-framework) — wie alle Teile zusammenhängen · [Governance-Playbook](https://github.com/SimpleAct-Compliance/simpleact-ai-governance-playbook) — wer freigibt und wer eskaliert · [KI-Kompetenz](https://github.com/SimpleAct-Compliance/elearning) — Art. 4, auch für den Support

## Tarifgenaue Anbieterangaben

Für die Modellbeschaffung: ein öffentliches Register mit tarifgenauen Angaben einzelner KI-Werkzeuge — Auftragsverarbeitung, Trainingsnutzung, Verarbeitungsort, Unterauftragsverarbeiter —, jede mit Quelle und Prüfdatum: **[actcomp.de](https://actcomp.de)**

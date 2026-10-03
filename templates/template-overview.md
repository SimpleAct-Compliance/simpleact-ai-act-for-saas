# Vorlagen

| Vorlage | Zweck | Wann |
|---|---|---|
| [Funktionsregister](./saas-feature-inventory-template.md) | ein Eintrag je KI-Funktion im Produkt | bei Aufnahme, dann laufend |
| [Transparenz- und Releaseprüfung](./transparency-and-release-checklist.md) | fünf Freigabefragen, Art. 50 je Ansicht, Kundeninformation | vor jedem Release mit KI-Änderung |

## Die wichtigste Entscheidung bei der Einführung

**Die Releaseprüfung gehört in die bestehende Freigabevorlage**, nicht in ein eigenes Dokument. Ein Dokument, das man zusätzlich öffnen muss, wird beim dritten Release vergessen — und dann bleiben die Fragen dauerhaft unbeantwortet, weil es keinen zweiten Anlass gibt.

Die fünf Fragen sind kurz genug dafür:

1. Ändert sich das Verhalten einer KI-Funktion?
2. Ist die Änderung wesentlich nach Art. 3 Nr. 23?
3. Ändert sich die Zweckbestimmung?
4. Werden Nachweise mit Versionsbezug ungültig?
5. Müssen Kunden informiert werden?

## Was in diesen Vorlagen anders ist

**Je Funktion, nicht je Produkt.** Ein Produkt mit vier KI-Funktionen hat vier Einträge: Die Klasse kann je Funktion verschieden ausfallen, Art. 50 trifft manche und andere nicht, und verschiedene Funktionen nutzen verschiedene Modelle.

**Art. 50 wird je Ansicht geprüft.** Desktop, Mobil, eingebettet, Benachrichtigungen. Der häufigste Einzelfehler ist ein Hinweis, der nur in der Desktopansicht erscheint.

**Die Modellversion hat ein eigenes Feld, und die Frage, ob der Anbieter sie gewechselt hat.** Bleibt die eigene Version gleich und hat der Zulieferer getauscht, ist das System ein anderes — ohne dass ein Release stattgefunden hat.

**Die Übernahmequote wird gemessen.** Sie entscheidet mit darüber, ob eine Funktion die menschliche Bewertung praktisch ersetzt, und damit über die Ausnahme nach Art. 6 Abs. 3.

**Die Mehrmandanz-Felder fragen nach technisch erzwungenen Grenzen**, nicht nach vertraglichen. Was technisch nicht möglich ist, muss nicht verboten werden.

## Was automatisiert werden sollte

| Schritt | Automatisierbar |
|---|---|
| Testsatz laufen lassen, Abweichung melden | ja |
| Modellversion protokollieren | ja, sofern der Anbieter sie liefert |
| Kennzeichnung prüfen | teilweise, über Oberflächentests |
| Änderungsverlauf aus Releases erzeugen | teilweise |
| Wesentlichkeit bewerten | **nein** |
| Kundeninformation entscheiden | **nein** |

Die beiden letzten sind der Grund, warum es einen Freigabeschritt mit Menschen gibt. Alles darüber sollte ohne Zutun laufen — sonst wird es vergessen.

## Format

Markdown, damit Einträge und Prüfungen versionierbar sind und ein Diff zeigt, was sich seit dem letzten Release geändert hat. Für ein Produkt mit laufenden Releases ist diese Änderungsgeschichte der eigentliche Nachweis.

Das Funktionsregister gehört neben den Code, nicht in ein Wiki: Ein Register, das bei der Release-Freigabe verlangt wird, bleibt aktuell; eines an anderer Stelle nicht.

## Weiter

[Funktionsregister](../knowledge-base/eu-ai-act/inventory-and-governance.md) · [Release und Änderungen](../knowledge-base/eu-ai-act/release-and-change-management.md) · [README](../README.md)

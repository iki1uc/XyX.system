RUN 3 — vollständige mathematische Systemanalyse
RUN 3 ist der Modus, der die Engine aktiviert, Pump‑Energie verarbeitet und die beiden CPU‑Sprünge A und B berechnet.
Er ist der erste echte Berechnungsmodus im MASTER.boot.block.

1️⃣ Eingaben (Inputs)
RUN 3 verwendet drei Eingaben:

pump
Integer 0–100

kommt vom Slider

repräsentiert Energie

USER.level
fest: 6

active
RUN 3 setzt:

Code
active = 1
Damit entsteht der Basiswert:

Basis
=
𝑈
𝑆
𝐸
𝑅
.
𝑙
𝑒
𝑣
𝑒
𝑙
+
𝑎
𝑐
𝑡
𝑖
𝑣
𝑒
=
6
+
1
=
7
Dieser Wert ist die Grundlage für alle Berechnungen.

2️⃣ Berechnungen (Formel A & Formel B)
RUN 3 berechnet zwei unabhängige Sprünge.

Formel A (cpuJumpA)
js
cpuJumpA = (USER.level + active) + Math.floor(pump / 6)
Mathematisch:

𝐴
=
7
+
⌊
𝑝
𝑢
𝑚
𝑝
6
⌋
Formel B (cpuJumpB)
js
cpuJumpB = (USER.level + active) + Math.floor(pump / 8)
Mathematisch:

𝐵
=
7
+
⌊
𝑝
𝑢
𝑚
𝑝
8
⌋
Warum zwei Formeln?
A reagiert stärker auf pump (÷6)

B reagiert schwächer (÷8)

Beide Werte bleiben getrennt

B überschreibt A nicht

3️⃣ Zustände (State‑Änderungen)
RUN 3 verändert drei interne Systemzustände:

active
Code
active = 1
hits
Wenn A > 0:

js
hits++
Mathematisch:

ℎ
𝑖
𝑡
𝑠
=
ℎ
𝑖
𝑡
𝑠
+
1
memory.logs
RUN 3 schreibt Log‑Einträge:

Formel A

Formel B

Engine fertig

Pump‑Wert

Achsenwechsel

Moves

4️⃣ Ausgaben (Outputs)
RUN 3 erzeugt:

cpuJumpA

cpuJumpB

hits

Log‑Einträge

Orbit‑Update

UI‑Update

5️⃣ Ablauf (Algorithmus)
Der exakte Ablauf von RUN 3:

Schritt 1 — pump lesen
Code
pump = Sliderwert
Schritt 2 — Basiswert berechnen
𝑎
𝑐
𝑡
𝑖
𝑣
𝑒
=
1
𝑏
𝑎
𝑠
𝑖
𝑠
=
7
Schritt 3 — Formel A
𝐴
=
7
+
⌊
𝑝
𝑢
𝑚
𝑝
/
6
⌋
Schritt 4 — hits aktualisieren
Wenn A > 0:

ℎ
𝑖
𝑡
𝑠
+
+
Schritt 5 — Formel B
𝐵
=
7
+
⌊
𝑝
𝑢
𝑚
𝑝
/
8
⌋
Schritt 6 — Werte speichern
Code
state.cpuJumpA = A
state.cpuJumpB = B
state.hits = hits
Schritt 7 — Log schreiben
Code
log("Formel A: jumpA=" + A)
log("Formel B: jumpB=" + B)
log("Engine fertig: A=" + A + ", B=" + B)
Schritt 8 — Orbit aktualisieren
Code
drawOrbit(0)
Schritt 9 — UI aktualisieren
Code
updateUI()
6️⃣ Beispielrechnung
Wenn pump = 42 (wie in deinem Screenshot):

Formel A:
𝐴
=
7
+
⌊
42
/
6
⌋
=
7
+
7
=
14
Formel B:
𝐵
=
7
+
⌊
42
/
8
⌋
=
7
+
5
=
12
hits:
A > 0 → hits++

7️⃣ RUN 3 im Systemfluss
RUN 3 ist Teil der Engine‑Pipeline:

RUN 1 → Boot

RUN 2 → Init

RUN 3 → Engine aktiv

RUN 4 → Orbit‑Modus

RUN 5 → Moves

RUN 6 → Axiome

RUN 9 → Pipelines

RUN 3 ist der erste mathematische Modus,
der echte Werte erzeugt.

8️⃣ RUN 3 und Orbit
RUN 3 beeinflusst den Orbit indirekt:

pump → Energie

cpuJumpA → starker Sprung

cpuJumpB → schwacher Sprung

hits → Engine‑Zustand

Achsenwechsel → Highlight

Moves → Orbit‑Pfad

Orbit wird nach RUN 3 neu gezeichnet:

Code
drawOrbit(0)
9️⃣ RUN 3 und AXIS
RUN 3 selbst nutzt AXIS nicht,
aber AXIS kann RUN‑Werte später einbeziehen:

AXIS.x() kann pump einbeziehen

AXIS.y() kann cpuJumpA einbeziehen

AXIS.z() kann cpuJumpB einbeziehen

Das ist optional, aber möglich.

🟦 Kurzfassung
RUN 3 setzt active = 1

Basiswert = 7

Formel A = 7 + pump/6

Formel B = 7 + pump/8

hits++ wenn A > 0

Orbit wird neu gezeichnet

UI wird aktualisiert

Log wird geschrieben
KlicK wieimmer only4u iki1uc 

---
layout: page
title: "AsDoc/SetRekvsReadOnly"
---
# SetRekvsReadOnly մեթոդ

[См. также](../Asdoc.md) [Օրինակ](../../Examples/E_SetRekvsReadOnly.html) [Применяется к](../Asdoc.md)

Նշանակում է տրված դաշտերի  խմբագրելիության հայտանիշը։

## Շարահյուսություն

``` vb
object.SetRekvsReadOnly(RekvNames, [bValue], [sDelimeter])
```
Բաղադրիչներն են՝ 

| Պարամետր | Նկարագրություն |
|--|--|
| object | Փաստաթուղթ օբյեկտի հղում։|
| RekvNames| Դաշտերի ներքին անունները։ |
| bValue | Խմբագրելիության նոր արժեք։ Լռությամբ արժեքը True։ |
| sDelimeter | sRekvNames-ի դաշտերի ներքին անունների բաժանման նշան։ Լռությամբ սահմանվում է `" "`։ |


## Արժեքներ


| Արժեքներ | Նկարագրություն |
|--|--|
| True | Դաշտերի խմբագրումը թույլատրելի չէ։  |
| False | Դաշտերի խմբագրումը թույլատրելի է։ |


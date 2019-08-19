---
layout: page
title: "AsFolderElement/Status"
---


# Status հատկություն

[См. также](../AsFoldElement.md) Օրինակ [Применяется к](../AsFoldElement.md)

Վերադարձնում կամ նշանակում է փաստաթղթի կարգավիճակը այս թղթապանակում։

## Շարահյուսություն

``` vb
object.Status = [sValue]
```


Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| object | Թղթապանակի տարրի հղում։ |
| sValue | Նուր արժեք։ |


## Արժեքներ


| Արժեքներ | Նկարագրություն |
|--|--|
| "E" | Թղթապանակում գտնվում է փաստաթղթի բնօրինակը։ <br/>Այս դեպքում միջուկը կարող է հասանելի դարձնել փաստաթղթի փոփոխման/խմբագրման գործողությունները։ |
| "C" | Թղթապանակում գտնվում է փաստաթղթի կրկնօրինակը։ <br/>Այս դեպքում միջուկը կարող է հասանելի դարձնել փաստաթղթի դիտման գործողությունը։ |
| "S" | Թղթապանակում գտնվում է կրկնակի մուտքագրման ուղարկված փաստաթղթը։ <br/>Այս դեպքում միջուկը կարող է հասանելի դարձնել փաստաթղթի կրկնակի մուտքագրման գործողությունը։ |
| "V" | Թղթապանակում գտնվում է վավերացման ուղարկված փաստաթղթը։ <br/>Այս դեպքում միջուկը կարող է հասանելի դարձնել փաստաթղթի վավերացման/մերժման գործողությունը։ |
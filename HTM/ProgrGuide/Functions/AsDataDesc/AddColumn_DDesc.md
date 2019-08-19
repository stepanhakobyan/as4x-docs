---
layout: page
title: "AsDataDesc/AddCoLumn"
---

# AddCoLumn մեթոդ

[См. также](../AsDataDesc.md) Օրինակ [Применяется к](../AsDataDesc.md)

Ավելացնում է սյունակ  դինամիկ տվյալների աղբյուրի համար։ 

## Շարահյուսություն

``` vb
object.AddCoLumn sName, sCaption, sECaption, sType, vField, [bTotal], [bVisible], [bPermanent]
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
|  object  | Դինամիկ տվյալների աղբյուրի հղում։ |
| sName | Ավելացվող սյունակի անունը։ |
| sCaption | Ավելացվող սյունակի անվանումը։ |
| sECaption | Ավելացվող սյունակի անվանումը օտար լեզվով։ |
| sType | Ավելացվող սյունակի [ներքին տիպը](../../types.html)։ |
| vField | Սյունակի անունը կամ համարը աղբյուրից։ Եթե տվյալները ստանում ենք [ArrayDB](ArrayDB_DDesc.md) մասիվից, ապա պետք է տալ մասիվում սյունակի համարը։ Եթե տվյալները ստանում ենք [SQL](SQL_DDesc.md) հարցումով, ապա պետք է տալ ստացվող սյունակի անունը։ |
| bTotal | Սյունակի ընդհանուր գումարի առկայությունը։ 1 արժեքը միացնում է, 0 արժեքը՝ անջատում։ Լռությամբ արժեքը 0 է։ |
| bVisible | Ավելացվող սյունակի տեսանելիությունը։ Լռությամբ արժեքը `True`: |
| bPermanent | Ավելացվող սյունակների հավերժական լինելը։ Լռությամբ արժեքը `True`: |


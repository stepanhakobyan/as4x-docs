---
layout: page
title: "DocParentIsn ֆունկցիա"
---

## DocParentIsn ֆունկցիա

> Այս ֆունկցիան փոխարինվել է ընդլայնված [DocParents](DocParents.md) ֆունկցիայով։

Նշված փաստաթղթի համար վերադարձնում է ծնողի ISN-ը։ 

Վերադարձվող արժեքը կարելի է ֆիլտրել ըստ փաստաթղթի տիպերի։

Եթե ծնողը բացակայում է, ապա վեադառնում է -1 արժեքը։  
Եթե վերադարձվող ծնող ISN-ների քանակը մեկից շատ է, ապա ֆունկցիան առաջացնում է սխալ։ 

## Շարահյուսություն

``` vb
Function DocParentIsn(ByVal nISN As Long, _
                      ByVal sDocTypes As String) As Long
```

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| nISN | Հիմնական փաստաթղթի ISN, որի համար բերվում է ծնողը։ |
| sDocTypes | Սահմանում է ներառվող կամ չներառվող փաստաթղթերի տիպերը։ Եթե պարամետրը դատարկ է, ապա վերադարձվում են կամայական տիպի ծնողի ISN։ <br> Ներառվող տիպերի ցուցակը թվարկվում են `+` նշանով սկսելով։ Օրինակ՝ `"+KasPr MemOrd SetPr"`։ <br> Չներառվող տիպերի ցուցակը թվարկվում են `-` նշանով սկսելով։ Օրինակ՝ `"-AccDoc AsTurn"`։ |

## Նկատառումներ

[Տես նաև](../../../functions.html)

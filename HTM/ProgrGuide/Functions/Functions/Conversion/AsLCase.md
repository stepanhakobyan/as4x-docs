---
layout: page
title: "AsLCase ֆունկցիա"
---

# AsLCase ֆունկցիա

Ձևափոխում է տրված տողի սիմվոլները փոքրատառերի և վերադարձնում է ստացված տողը:

Վերադարձնում է սիմվոլային  տող:

## Շարահյուսություն

``` vb
Public Function AsLCase(ByVal sSource As String, Optional ByVal nLang As Long = -1) As String
```

Բաղադրիչներն են՝


| Պարամետր | Նկարագրություն |
|--|--|
| sSource | Մուտքային տողը։ |
| nLang | Մուտքային տողի լեզվի կոդը։ |

## Կարգաբերումներ

`nLang`-ը կարող է ընդունել հետևյալ արժեքները`

| Արժեքներ | Նկարագրություն |
|--|--|
| -1 | Ծրագրի աշխատանքի ընթացիկ լեզվի կոդը պարամետրերից։ |
| 1 | Հայերեն (Windows-ի կոդավորմամբ) |
| 2 | Ռուսերեն (Windows-ի կոդավորմամբ) |
| 3 | Անգլերեն |

## Նկատառումեր

[Տես նաև](../../../functions.html)

---
layout: page
title: "NavTree նկարագրություն"
---
    
# Ուղղարդիչ ծառի նկարագրություն

Նախատեսված է ուղղարդիչ ծառի Աշխատանքային տեղեր(ԱՇՏ-ներ) նկարագրելու համար։

## Շարահյուսություն

``` as4x
NavTree {
    Name = sName; 
    Caption = sCaption;
    ECaption = sECaption;
    Type = nType; 
    Attributs = nAttributs ; 
    System = nSystem;  
};
```
[Узлы дерева навигации](../NavTreeNode.html)

Բաղադրիչներն են՝

| Պարամետր | Նկարագրություն |
|--|--|
| sName | Ուղղարդիչ ծառի ներքին անուն։ |
| sCaption | Ուղղարդիչ ծառի անվանում։ |
| sECaption | Ուղղարդիչ ծառի անվանումը օտար լեզվով։ |
| nType | Ուղղարդիչ ծառի տեսակը։ 0, 1 կամ 2 արժեք ընդունող։ <br/> `0` Աշխատանքային տեղ (ԱՇՏ): <br/> `1` Օգնական ուղորդիչ ծառ (տեղադրվում է այլ ԱՇՏ-ներում)։ <br/> `2` Օգտագործողի անձնական ուղորդիչ ծառ (ձևավորվում է համակարգի ներսից ամեն օգտագործողի համար առանձին և տեղադրվում ԱՇՏ-ներում)։ |
| nSystem | Դիզայներից խմբագրման հատկանիշ։ 1 արժեքի դեպքում օգտագործողի կողմից խմբագրումը չի թույլատրվում։ |

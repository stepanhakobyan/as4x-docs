﻿<html>
<head>
<title>Документ\FixedValue</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Свойство FixedValue</strong></font></p>

<p><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp; <u>
Пример</u>&nbsp;
<a href="../Asdoc.html">Применяется к</a></font></p>

<p><font face="Arial">Возвращает или устанавливает признак фиксации значения 
    реквизита документа.</font></p>

<p class="label"><font face="Arial">Свойство для чтения и записи.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><b><font face="Arial">Синтаксис</font></b></p>

<p><font face="Arial"><em>object.</em><strong>FixedValue</strong>(<em>rekvName</em>)[=<em>value</em>]</font></p>

<p><font face="Arial">Синтаксис свойства <strong>FixedValue</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">object</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр документа</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>rekvName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор реквизита документа</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>value</em></font></td>
    <td width="71%"><font face="Arial">логическое выражение, 
	определяющее признак фиксации значения реквизита</font></td>
  </tr>
</TBODY>
</table>
    <p>
        &nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Как только фиксируем значение какого-либо реквизита, то данное значение больше не 
    подлежит изменению ни в программе, ни в скрипте. При попытке хоть как-нибудь 
    изменить фиксируемое значение реквизита в коде, обработчик события Validate 
    выдает сообщение о том, что значение данного реквизита изменить нельзя. А в 
    программе данный реквизит переходит в режим только для чтения.</font></p>
</body>
</html>
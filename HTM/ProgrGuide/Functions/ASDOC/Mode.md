﻿<html>
<head>
<title>Документ\Mode</title>
    <style type="text/css">
        .auto-style1 {
            font-family: Arial;
        }
        .auto-style2 {
            height: 29px;
        }
        .auto-style3 {
            font-family: Arial;
            height: 29px;
        }
        .auto-style4 {
            height: 30px;
        }
    </style>
</head>

<body>

<p><font size="4" face="Arial"><strong>Свойство Mode<br>
<br>
</strong></font><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает режим показа документа.</font></p>

<p class="label"><font face="Arial">Свойство для чтения.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><b><font face="Arial">Синтаксис</font></b></p>

<p><font face="Arial"><em>object.</em><strong>Mode </strong></font></p>

<p><font face="Arial">Синтаксис свойства <strong>Mode</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр документа</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Тип данных</b></font></p>

<p><font face="Arial">Свойство Mode возвращает одно из следующих 
значений:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="auto-style4" width="29%"><font face="Arial"><b>Значение</b></font></td>
    <td class="auto-style4" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%" align="center"><font face="Arial">0</font></td>
    <td width="71%"><font face="Arial">документ сохраняется в состоянии 0</font></td>
  </tr>
  <tr>
    <td width="29%" align="center" class="auto-style2"><font face="Arial">1</font></td>
    <td width="71%" class="auto-style3">документ сохраняется и начинается процессинг, переведя состояние из 0 -&gt; в 1 </td>
  </tr>
  <tr>
    <td width="29%" align="center"><font face="Arial">2</font></td>
    <td width="71%" class="auto-style1">документ сохраняется и продолжается процессинг</td>
  </tr>
  <tr>
    <td width="29%" align="center"><font face="Arial">3</font></td>
    <td width="71%" class="auto-style1">Осуществляется повторный ввод документа</td>
  </tr>
  <tr>
    <td width="29%" align="center"><font face="Arial">4</font></td>
    <td width="71%" class="auto-style1">документ не визируется</td>
  </tr>
  <tr>
    <td width="29%" align="center"><font face="Arial">5</font></td>
    <td width="71%"class="auto-style1">документ визируется</td>
  </tr>
  <tr>
    <td width="29%" align="center"><font face="Arial">6</font></td>
    <td width="71%"class="auto-style1">документ импортируется</td>
  </tr>
</table>
</body>
</html>
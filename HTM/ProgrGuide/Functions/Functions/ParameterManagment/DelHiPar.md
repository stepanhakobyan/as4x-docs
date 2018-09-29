<html>
<head>
<title>DelHiPar</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод DelHiPar</font></strong></p>

<p><font face="Arial">Удаляет временной параметр из таблицы <a href="../../../Database/HiPar.html">
HiPar</a>. Данный метод может применяться для удаления курсов валют либо 
параметров законодательства. Он используется только для удаления параметров, не 
имеющих документа-основания (для них значение поля fISN в таблице <a href="../../../Database/HiPar.html">
HiPar</a> равно -1). Параметры, имеющие документы-основания, удаляются методом 
документа <a href="../../ASDOC/HiParDelete.html">HiParDelete</a>.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>DelHiPar (</strong><em>sParId</em>, [<em>dDate</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>DelHiPar</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>sParId</em></font></td>
    <td class="label" width="71%"><font face="Arial">строковое 
	выражение, определяющее код параметра. </font></td>
  </tr>
  <tr>
    <td class="label" width="29%"><font face="Arial"><em>dDate</em></font></td>
    <td class="label" width="71%"><font face="Arial">необязательное 
	выражение типа даты, определяющее дату начала действия параметра. Если 
	параметр опущен, то удаляются все записи с указанным кодом параметра.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="Hipar.html"><font face="Arial">См. также</font></a></p>

<p>&nbsp;</p>

<p><font size="3" face="Arial"><strong>Пример метода DelHiPar<br>
</strong><br>
Удаляются все курсы валюты со значением кода параметра </font><font face="Arial">
&quot;.cur.001&quot; на дату &quot;01/05/00&quot;.</font></p>

<p><font face="Arial">DelHiPar(&quot;.cur.001&quot;, &quot;01/05/00&quot;) <br>
</font></p>
</body>
</html>
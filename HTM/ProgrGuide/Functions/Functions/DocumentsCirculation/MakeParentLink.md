﻿<html>
<head>
<title>MakeParentLink</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод MakeParentLink</font></strong></p>

<p class="label"><font face="Arial">Устанавливает связь с родительским 
документом. </font></p>

<p class="label"><font face="Arial">&nbsp;</font></p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>MakeParentLink</strong> (<em>Doc, 
nParentISN</em>, [<em>bCreate</em>])</font></p>

<p><font face="Arial">Синтаксис метода <strong>MakeParentLink</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">Doc</font></em></td>
    <td width="71%"><font face="Arial">переменная, ссылающаяся на 
	экземпляр дочернего документа, для которого создается связь с родителем.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><em><font face="Arial">nParentISN</font></em></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN родительского документа.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">bCreate</font></em></td>
    <td width="71%"><font face="Arial">необязательное логическое 
	выражение, определяющее признак разрыва ранее существующих связей с другими 
	родителями. Если значение параметра True, то ранее существующие связи 
	заменяются новыми. В противном случае, при значении параметра False, к 
	старым связям добавляются новые.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><b><font face="Arial">Примечание</font></b></p>

<p class="label"><font face="Arial">В таблицу <a href="../../../Database/DocP.html">
DOCP</a> добавляется строка, соответствующая данному документу.<br>
<b><br>
</b><a href="CutParentLink.html">См. также</a></font></p>

<p class="label">&nbsp;</p>
</body>
</html>
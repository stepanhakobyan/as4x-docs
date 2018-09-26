﻿<html>
<head>
<title>FolderElByISN</title>
</head>

<body>

<h1><font face="Arial"><font size="4">Функция FolderElByISN<br>
</font><a href="../../AsFoldElement.html"><font size="3"><strong>свойства&nbsp;&nbsp; 
методы</strong></font></a></font></h1>

<p><font face="Arial">Возвращает ссылку на существующий <a href="../../AsFoldElement.html">
объект типа элемент папки</a> по имени папки и ISN документа. Функция 
используется для получения значений свойств элемента папки. Если объект не 
существует, тогда функция возвращает значение Nothing.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set </strong><em>xFolderEl</em><strong> 
= Util.FolderElByISN</strong>(<em>sFolderId, nISN</em>)<em><br>
</em><br>
Синтаксис функции <strong>FolderElByISN</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">xFolderEl</font></em></td>
    <td width="71%"><font face="Arial">переменная, ссылающаяся на <a href="../../AsFoldElement.html">
	объект типа элемент папки</a></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sFolderId</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Database/Folders.html">идентификатор папки</a></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nISN</em></font></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN документа в папке</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../Database/Folders.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<h1><font size="3" face="Arial"><strong>Пример функции FolderElByISN</strong></font></h1>

<p><font face="Arial">Переменная xFOLDERACC ссылается на существующий 
объект типа элемент папки. Через нее возвращаются значения свойств Сom и Spec 
элемента папки.</font></p>

<p><font face="Arial">set xFOLDERACC = <strong>FolderElByISN</strong>(&quot;NBACC&quot;, 
doc(&quot;ISN&quot;))<br>
GetNBNAME = xFOLDERACC.<a href="../../AsFoldElement/Com.html">Com</a><br>
CodCur = MID(xFOLDERACC.<a href="../../AsFoldElement/Spec.html">Spec</a>, 1, 3) </font></p>
</body>
</html>
<html>
<head>
<title>LoadDialog</title>
</head>

<body>

<h1><font face="Arial" size="4">Функция LoadDialog<br>
</font><a href="../../AsDialogEx.html"><font size="3" face="Arial"><strong>
свойства&nbsp;&nbsp; методы</strong></font></a></h1>

<p><font face="Arial">Загружает заранее <a href="../../../Defs/Dialog.html">
описанный диалог</a> по его идентификатору.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>set</strong> <em>sDialogEx</em><strong> 
= LoadDialog (</strong><em>sDialogName</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>LoadDialog</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sDialogEx</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта типа описательный 
	диалог. Через нее можно получить доступ к свойствам и методам объекта.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">sDialogName</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор диалога.</font></td>
  </tr>
</table>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="../../../constructors.html"><font face="Arial">
См. также</font></a></p>

<p class="label">&nbsp;</p>

<p><font face="Arial"><strong><font size="3">Пример функции </font>
LoadDialog</strong></font></p>

<p><font face="Arial">В примере вызывается функция LoadDialog. 
Переменная mDialog ссылается на обьект типа описательный диалог со всеми его 
свойствами и методами. <br>
<br>
Dim mDialog As AsDialogEx<br>
Set mDialog = <strong>LoadDialog</strong>(&quot;DialogExDataName&quot;)<br>
mDialog.<a href="../../AsDialogEx/Show.html">Show</a></font></p>
</body>
</html>
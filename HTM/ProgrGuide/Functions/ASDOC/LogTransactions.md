<html>
<head>
<title>Документ\LogTransactions</title>
</head>

<body>

<p><font face="Arial"><font size="4"><strong>Свойство LogTransactions<br>
<br>
</strong></font><a href="../../Database/DocLog.html">См. также</a>&nbsp; <u>
Пример</u>&nbsp;
<a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает или устанавливает 
разрешение на автоматическую регистрацию в историю документа записи о проведении 
проводок. Если данное свойство не установлено, то ядро системы автоматически, 
каждый раз, при проведении проводок будет регистрировать запись в <a href="../../Database/DocLog.html">
историю документа</a>.</font></p>

<p class="label"><font face="Arial">Свойство для чтения и записи.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.LogTransactions</strong>[=<em>bValue</em>]</font></p>

<p><font face="Arial">Синтаксис свойства <strong>LogTransactions</strong>
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
  <tr>
    <td width="29%"><font face="Arial"><em>bValue</em></font></td>
    <td width="71%"><font face="Arial">выражение логического типа, 
	определяющее признак регистрации в истории документа записи о проводках. При 
	значении False, автоматическая регистрация записи в историю блокируется.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Данное свойство блокирует только 
запись в базу <a
href="../../Database/DocLog.html">DOCLOG</a> строчек, c кодом операции fOP=&#39;T&#39;. К 
операциям визирования, корректировки, вторичного ввода импорта, удаления и т.д. 
данное свойство не влияет.</font></p>
</body>
</html>
﻿<html>
<head>
<title>Data</title>
</head>

<body>

<p><strong><font size="3" face="Arial">Пример свойств Caption, </font><font
face="Arial">DColCount, DParCount, EOF, Formatted, IndicateCaption, 
Name, Parameters, SQL, UpdateSQL, Value и методов CloseCursor, MoveFirst, 
MoveLast, MoveNext, OpenCursor</font></strong></p>

<p><font face="Arial">В примере вызывается свойство Data, через xDS 
возвращается ссылка на источник данных NBTURN2 со всеми его свойствами и 
методами. </font></p>

<p><font face="Arial">Set xDS = <a href="../Functions/Functions/SysDefManagment/Data.html">
Data</a>(&quot;NBTURN2&quot;)<strong><br>
</strong>sCaption = xDS.<strong>Caption</strong> <br>
nDColCount = xDS.<strong>DColCount<br>
</strong>nDParCount = xDS.<strong>DParCount<br>
....<br>
</strong>sName = xDS.<strong>Name</strong> <br>
sSQL = xDS.<strong>SQL<br>
</strong>sUpdateSQL = xDS.<strong>UpdateSQL</strong></font></p>

<p><font face="Arial">xDS.<strong>Parameters</strong>(1) = xBal<br>
xDS.<strong>Parameters</strong>(2) = &quot;%/%&quot;<br>
xDS.<strong>Parameters</strong>(3) = &quot;%&quot;<br>
<br>
xDS.<strong>IndicateCaption = </strong>&quot;Revaluate&quot;<br>
xDS.<strong>OpenCursor , , 1</strong><br>
<br>
Do While not xDS.<strong>EOF</strong><br>
&nbsp;&nbsp; xDSSTARTREM = CCur(AsRoundDiv(xDS.<strong>Value</strong>(&quot;STARTREM&quot;),cInt(RoundRate)))
<br>
&nbsp;&nbsp; STARTREM_Row = STARTREM_Row+ xDSSTARTREM<br>
&nbsp;&nbsp; xRep.AddRow xDS.<strong>Formatted</strong>(&quot;CODBAL&quot;) &amp; Space(2) &amp; 
CODBALNAME<br>
&nbsp;&nbsp; xDS.<strong>MoveNext</strong><br>
Loop <br>
<br>
......<br>
xDS.<strong>MoveFirst<br>
</strong>......<br>
xDS.<strong>MoveLast<br>
</strong>......<br>
<br>
<br>
xDS.<strong>CloseCursor</strong>&nbsp;&nbsp;&nbsp;&nbsp; <br>
</font></p>
</body>
</html>
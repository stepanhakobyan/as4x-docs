﻿<html>
<head>
<title>E_Dialog_ButtonClick</title>
</head>

<body>

<p><font size="3" face="Arial"><strong>Пример события ButtonClick</strong></font></p>

<p><font face="Arial">Ниже приведен пример обработчика события<font size="3" face="Arial"><strong> 
    </strong> 
    <a href="../ScriptProcs/Dialog_ButtonClick.html">ButtonClick</a></font> в <a
href="../Defs/Dialog.html">описании диалога</a>.</font></p>

<p><font face="Arial">Public Sub <strong>ButtonClick(<em>ByVal objDialog As 
    AsDialog, ByVal sBtnName As String, _</em></strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <strong><em>ByVal sngBtnTop As Single, ByVal sngBtnLeft As Single, ByRef Reakcia</em></strong>
    <strong>)<br />
    </strong><br>
&nbsp;&nbsp;&nbsp; If <em><strong>objDialog</strong></em>.<em>Name</em> = &quot;DlgName&quot; Then
    <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Select Case <strong><em>sBtnName</em></strong><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Case &quot;BName&quot;<br />
&nbsp;&nbsp;&nbsp;&nbsp; <strong><em>&nbsp;&nbsp;&nbsp; objDialog</em></strong>(&quot;bColN&quot;) = 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End Select<br />
&nbsp;&nbsp;&nbsp; End If<br>
End Sub<br>
</font></p>

</body>
</html>
// webget.js

function Id(id)
{
    return document.getElementById(id);
}


function GetMpegVersion(samprate)
{
    mpeg_ver=1.0;

    switch(samprate) {
    case 32000:
    case 44100:
    case 48000:
	mpeg_ver=1.0;
	break;

    case 16000:
    case 22050:
    case 24000:
	mpeg_ver=2.0;
	break;

    case 8000:
    case 11025:
    case 12000:
	mpeg_ver=2.5;
	break;
    }
    return mpeg_ver;
}


function SetLayerII()
{
    mpeg_ver=GetMpegVersion(parseInt(Id('samprate').value));
    if(mpeg_ver==1.0) {
	Id('bitrate').innerHTML=
	    '<option value="32000">32 kbit/sec</option>\n'+
	    '<option value="48000" selected>48 kbit/sec</option>\n'+
	    '<option value="56000">56 kbit/sec</option>\n'+
	    '<option value="64000">64 kbit/sec</option>\n'+
	    '<option value="80000">80 kbit/sec</option>\n'+
	    '<option value="96000">96 kbit/sec</option>\n'+
	    '<option value="112000">112 kbit/sec</option>\n'+
	    '<option value="128000">128 kbit/sec</option>\n'+
	    '<option value="160000">160 kbit/sec</option>\n'+
	    '<option value="192000">192 kbit/sec</option>\n';
	    /* Bitrates higher than 192 kbit/sec are allowed only for
	     * stereo and dual channel modes.
	    '<option value="224000">224 kbit/sec</option>\n'+
	    '<option value="256000">256 kbit/sec</option>\n'+
	    '<option value="320000">320 kbit/sec</option>\n'+
	    '<option value="384000">384 kbit/sec</option>\n';
	    */
    }
    if(mpeg_ver==2.0) {
	Id('bitrate').innerHTML=
	    '<option value="8000">8 kbit/sec</option>\n'+
	    '<option value="16000" selected>16 kbit/sec</option>\n'+
	    '<option value="24000">24 kbit/sec</option>\n'+
	    '<option value="32000">32 kbit/sec</option>\n'+
	    '<option value="40000">40 kbit/sec</option>\n'+
	    '<option value="48000">48 kbit/sec</option>\n'+
	    '<option value="56000">56 kbit/sec</option>\n'+
	    '<option value="64000">64 kbit/sec</option>\n'+
	    '<option value="80000">80 kbit/sec</option>\n'+
	    '<option value="96000">96 kbit/sec</option>\n'+
	    '<option value="112000">112 kbit/sec</option>\n'+
	    '<option value="128000">128 kbit/sec</option>\n'+
	    '<option value="144000">144 kbit/sec</option>\n'+
	    '<option value="160000">160 kbit/sec</option>\n';
    }
    if(mpeg_ver==2.5) {
	Id('bitrate').innerHTML=
	    '<option value="8000">8 kbit/sec</option>\n'+
	    '<option value="16000" selected>16 kbit/sec</option>\n'+
	    '<option value="24000">24 kbit/sec</option>\n'+
	    '<option value="32000">32 kbit/sec</option>\n'+
	    '<option value="40000">40 kbit/sec</option>\n'+
	    '<option value="48000">48 kbit/sec</option>\n'+
	    '<option value="56000">56 kbit/sec</option>\n'+
	    '<option value="64000">64 kbit/sec</option>\n';
    }
}


function SetLayerIII()
{
    mpeg_ver=GetMpegVersion(parseInt(Id('samprate').value));
    if(mpeg_ver==1.0) {
	Id('bitrate').innerHTML=
	    '<option value="32000">32 kbit/sec</option>\n'+
	    '<option value="40000" selected>40 kbit/sec</option>\n'+
	    '<option value="48000">48 kbit/sec</option>\n'+
	    '<option value="56000">56 kbit/sec</option>\n'+
	    '<option value="64000">64 kbit/sec</option>\n'+
	    '<option value="80000">80 kbit/sec</option>\n'+
	    '<option value="96000">96 kbit/sec</option>\n'+
	    '<option value="112000">112 kbit/sec</option>\n'+
	    '<option value="128000">128 kbit/sec</option>\n'+
	    '<option value="160000">160 kbit/sec</option>\n'+
	    '<option value="192000">192 kbit/sec</option>\n'+
	    '<option value="224000">224 kbit/sec</option>\n'+
	    '<option value="256000">256 kbit/sec</option>\n'+
	    '<option value="320000">320 kbit/sec</option>\n';
    }
    if(mpeg_ver==2.0) {
	Id('bitrate').innerHTML=
	    '<option value="8000">8 kbit/sec</option>\n'+
	    '<option value="16000" selected>16 kbit/sec</option>\n'+
	    '<option value="24000">24 kbit/sec</option>\n'+
	    '<option value="32000">32 kbit/sec</option>\n'+
	    '<option value="40000">40 kbit/sec</option>\n'+
	    '<option value="48000">48 kbit/sec</option>\n'+
	    '<option value="56000">56 kbit/sec</option>\n'+
	    '<option value="64000">64 kbit/sec</option>\n'+
	    '<option value="80000">80 kbit/sec</option>\n'+
	    '<option value="96000">96 kbit/sec</option>\n'+
	    '<option value="112000">112 kbit/sec</option>\n'+
	    '<option value="128000">128 kbit/sec</option>\n'+
	    '<option value="144000">144 kbit/sec</option>\n'+
	    '<option value="160000">160 kbit/sec</option>\n';
    }
    if(mpeg_ver==2.5) {
	Id('bitrate').innerHTML=
	    '<option value="8000">8 kbit/sec</option>\n'+
	    '<option value="16000" selected>16 kbit/sec</option>\n'+
	    '<option value="24000">24 kbit/sec</option>\n'+
	    '<option value="32000">32 kbit/sec</option>\n'+
	    '<option value="40000">40 kbit/sec</option>\n'+
	    '<option value="48000">48 kbit/sec</option>\n'+
	    '<option value="56000">56 kbit/sec</option>\n'+
	    '<option value="64000">64 kbit/sec</option>\n';
    }
}


function samplerateChanged()
{
    if(Id('format').value=='MP2') {
	SetLayerII();
    }
    if(Id('format').value=='MP3') {
	SetLayerIII();
    }
}


function formatChanged()
{
    Id('bitrate').disabled=
	!((Id('format').value=="MP2")||
	  (Id('format').value=="MP3"));
    Id('quality').disabled=Id('format').value!="VORBIS";
    samplerateChanged();
}

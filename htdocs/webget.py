#!/usr/bin/python

from __future__ import print_function

import os
import sys
import subprocess
import tempfile
import urllib

def eprint(*args,**kwargs):
    print(*args,file=sys.stderr,**kwargs)

title=''
samprate=48000
format='MP3'
bitrate=32000
quality=2

#
# Get call fields
#
f0=os.environ['QUERY_STRING'].split('&')
for field in f0:
    f1=field.split('=')
    if(f1[0]=='title'):
        title=urllib.unquote(f1[1])
    if(f1[0]=='samprate'):
        samprate=int(urllib.unquote(f1[1]))
    if(f1[0]=='format'):
        format=urllib.unquote(f1[1])
    if(f1[0]=='bitrate'):
        bitrate=int(urllib.unquote(f1[1]))
    if(f1[0]=='quality'):
        quality=int(urllib.unquote(f1[1]))
if(len(title)==0):
    print('Content-type: text/html')
    print()
    print('No title specified!')
    sys.exit(0)
title=title.replace('+',' ')
    
#
# Generate file export
#
tempdir=tempfile.mkdtemp()
try:
    filename=subprocess.check_output(('rdexport','--title='+title,
                                      '--metadata-pattern=%t',
                                      '--samplerate='+str(samprate),
                                      '--format='+format,
                                      '--bitrate='+str(bitrate),
                                      '--quality='+str(quality),
                                      tempdir))
except subprocess.CalledProcessError:
    os.rmdir(tempdir)
    print('Content-type: text/html')
    print('Status: 500')
    print()
    print('500 - unable to execute rdexport(1)')
    sys.exit(0)
if(len(filename)==0):
    os.rmdir(tempdir)
    print('Content-type: text/html')
    print('Status: 404')
    print()
    print('404 - no cart with that title');
    sys.exit(0)
filename=filename[0:len(filename)-1]
filepath=tempdir+'/'+filename
try:
    mimetype=subprocess.check_output(('file','--brief','--mime-type',filepath))
except subprocess.CalledProcessError:
    os.remove(filepath)
    os.rmdir(tempdir)
    print('Content-type: text/html')
    print('Status: 500')
    print()
    print('500 - unable to determine output mime-type')
    sys.exit(0)

#
# Render the output
#
try:
    f=open(filepath,'r')
except IOError, reason:
    print('Content-type: text/html')
    print()
    print('500 - unable to open exported file "'+filepath+'" ['+str(reason)+']')
    sys.exit(0)
    
print('Content-Disposition: attachment; filename=\"'+filename+'\"')
print('Content-type: '+mimetype)

bytes=f.read(1024)
while(len(bytes)>0):
    sys.stdout.write(bytes)
    bytes=f.read(1024)
f.close()
os.remove(filepath)
os.rmdir(tempdir)

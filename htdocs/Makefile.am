## Makefile.am
##
## (C) Copyright 2017 Fred Gleason <fredg@paravelsystems.com>
##
##   This program is free software; you can redistribute it and/or modify
##   it under the terms of the GNU General Public License version 2 as
##   published by the Free Software Foundation.
##
##   This program is distributed in the hope that it will be useful,
##   but WITHOUT ANY WARRANTY; without even the implied warranty of
##   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
##   GNU General Public License for more details.
##
##   You should have received a copy of the GNU General Public
##   License along with this program; if not, write to the Free Software
##   Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
##
## Use automake to process this into a Makefile.in

install-exec-local:	
	mkdir -p $(DESTDIR)@libexecdir@
	cp webget.html $(DESTDIR)@libexecdir@/
	cp webget.js $(DESTDIR)@libexecdir@/
	cp webget.py $(DESTDIR)@libexecdir@/

uninstall-local:	
	rm -f $(DESTDIR)@libexecdir@/webget.html
	rm -f $(DESTDIR)@libexecdir@/webget.js
	rm -f $(DESTDIR)@libexecdir@/webget.py
	rm -f $(DESTDIR)@libexecdir@/webget.pyc
	rm -f $(DESTDIR)@libexecdir@/webget.pyo

EXTRA_DIST = webget.html\
             webget.js\
             webget.py

CLEANFILES = *~
MAINTAINERCLEANFILES = *~\
                       Makefile.in

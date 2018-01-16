#-- include('examples/showgrabbox.py')--#
# -*- coding: utf-8 -*-
import sys
import pyscreenshot as ImageGrab
from urlparse import urlparse
u = urlparse('http://مركز-التسجيل.السعودية/')
im=ImageGrab.grab(bbox=(int(sys.argv[1]),int(sys.argv[2])+30,int(sys.argv[3]),int(sys.argv[2])+68)) # X1,Y1,X2,Y2
im.show()
im.save(u.netloc+'.png')
#-#
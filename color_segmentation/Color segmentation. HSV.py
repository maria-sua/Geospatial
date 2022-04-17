#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import cv2
import numpy as np
import matplotlib as plot 


# In[ ]:


image = cv2.imread('C:/Users/marsu/OneDrive/Cambridge_University_Work/clip_56ONE.tif')

def nothing (x):
    pass

#Displaying Trackbars and setting limit values
cv2.namedWindow('colors')
cv2.resizeWindow('colors', 600, 250)
cv2.createTrackbar('LH', 'colors', 19, 255, nothing)
cv2.createTrackbar('MH', 'colors', 255, 255, nothing)
cv2.createTrackbar('LS', 'colors', 0, 255, nothing)
cv2.createTrackbar('MS', 'colors', 255, 255, nothing)
cv2.createTrackbar('LV', 'colors', 0, 255, nothing)
cv2.createTrackbar('MV', 'colors', 255, 255, nothing)

#importing file
while True:
    

    #applying values to our image
    l_h = cv2.getTrackbarPos('LH', 'colors')
    m_h = cv2.getTrackbarPos('MH', 'colors')    
    l_s = cv2.getTrackbarPos('LS', 'colors')
    m_s = cv2.getTrackbarPos('MS', 'colors')    
    l_v = cv2.getTrackbarPos('LV', 'colors')
    m_v = cv2.getTrackbarPos('MV', 'colors')
    
    print(l_h, m_h, l_s, m_s, l_v, m_v)
    
    lower= np.array([l_h, l_s, l_v])
    upper= np.array([m_h, m_s, m_v])
    
    #This will filter out the image and return it as a mask
    mask = cv2.inRange(image, lower, upper)
    final_result = cv2.bitwise_and(image, image, mask=mask)
    
    #resize output windows
    cv2.namedWindow("Output", cv2.WINDOW_NORMAL)
    cv2.resizeWindow("Output", 700, 700)
    cv2.namedWindow("final output", cv2.WINDOW_NORMAL)
    cv2.resizeWindow("final output", 500, 500)
    cv2.namedWindow("Mask", cv2.WINDOW_NORMAL)
    cv2.resizeWindow("Mask", 500, 500)
    
    #outputs
    cv2.imshow('final output', final_result)
    cv2.imshow('Mask', mask)
    cv2.imshow('Output', image)
    
    #wait for the user to exit and break the while loop 
    key = cv2.waitKey(1)
    if key == 27:
        break

#export output
cv2.imwrite('C:/Users/marsu/OneDrive/Cambridge_University_Work/clip_56ONE_result.tif', final_result)

#destroy all widows after exiting the while loop
cv2.destroyAllWindows()


# In[ ]:





from PIL import Image
from prometheus_client import Histogram
import sklearn
from sklearn.decomposition import PCA
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import confusion_matrix, precision_score, accuracy_score, recall_score, f1_score
import numpy as np
import cv2
import os
import math
import random

CUT_X=8
CUT_Y=4

#
def load_data():
    ORL_PATH = './orl'
    train_X=[]
    train_Y=[]
    test_X=[]
    test_Y=[]
    person_dirnames = os.listdir(ORL_PATH)
    for dirname in person_dirnames:
        for i in range(1,9):
            pic_path = os.path.join(ORL_PATH, dirname, str(i)+'.pgm')
            im = np.array(Image.open(pic_path).convert("L"))#
            train_X.append(im)
            train_Y.append(int(dirname[1:]) -1)
        for i in range(9,11):
            pic_path = os.path.join(ORL_PATH, dirname, str(i)+'.pgm')
            im = np.array(Image.open(pic_path).convert("L"))#
            test_X.append(im)
            test_Y.append(int(dirname[1:]) -1)
    #
    randnum = random.randint(0, 100)
    random.seed(randnum)
    random.shuffle(train_X)
    random.seed(randnum)
    random.shuffle(train_Y)
    print("训练集大小为：{}，测试集大小为：{}".format(len(train_X),len(test_X)))
    return np.array(train_X), np.array(train_Y).T, np.array(test_X), np.array(test_Y).T

#LBP
def LBP(FaceMat, R=2, P=8):
    pi=math.pi
    LBPoperator = np.mat(np.zeros([np.shape(FaceMat)[0], np.shape(FaceMat)[1]*np.shape(FaceMat)[2]]))
    for i in range(np.shape(FaceMat)[0]):
        #
        face = FaceMat[i, : ]
        W, H = np.shape(face)
        tempface = np.mat(np.zeros((W, H)))
        for x in range(R, W-R):
            for y in range(R, H-R):
                repixel = ''
                pixel = int(face[x, y])
                #cycle tensor
                for p in [2,1,0,7,6,5,4,3]:
                    p =float(p)
                    xp = x+R*np.cos(2*pi*(p/P))
                    yp = y-R*np.sin(2*pi*(p/P))
                    xp = int(xp)
                    yp = int(yp)
                    if face[xp, yp] > pixel:
                        repixel += '1'
                    else:
                        repixel += '0'
                #
                tempface[x, y] = int(minBinary(repixel), base=2)
        #
        #
        #
        #
        LBPoperator[i, :]= tempface.flatten()
    return LBPoperator.T

#
#
#
#
#
def minBinary(pixel):
    length = len(pixel)
    zero = ''
    #
    for i in range(length)[::-1]:
        if pixel[i] == '0':
            pixel = pixel[:i]
            zero += '0'
        else:
            return zero+pixel
    if len(pixel) == 0:
        return '0'

#
def calHistogram(ImgLBPope, h_num = CUT_X, w_num=CUT_Y):
    #
    Img = ImgLBPope.reshape(112, 92)
    H, w = np.shape(Img)
    #
    Histogram = np.mat(np.zeros(256, h_num*w_num))
    maskx, masky = H/h_num, w/w_num
    for i in range(h_num):
        for j in range(w_num):
            #
            mask = np.zeros(np.shape(Img), np.uint8)
            mask[int(i*maskx): int((i+1)*maskx), int(j*masky):int((j+1)*masky)] = 255
            hist = cv2.calcHist([np.array(Img,np.uint8)], [0], mask, [256], [0,255])
            Histogram[:, i*w_num+j] = np.mat(hist).flatten().T
    return Histogram.flatten().T


import numpy as np
import matplotlib.pyplot as plt
import sklearn
import sklearn.datasets
import sklearn.linear_model
from testCases import *
from planar_utils import plot_decision_boundary, sigmoid, load_planar_dataset, load_extra_datasets

#the following code loads a type 2 dataset of a pattern of flowers into variables X and Y
X, Y = load_planar_dataset()

#load the daataset and visualize the dataset using matplotlib as follows
plt.scatter(X[0, :], X[1, :],c=Y, s=40, cmap=plt.cm.Spectral)
plt.show()

shape_x = X.shape
shape_y = Y.shape
m = Y.shape[1]

print("the dimensionality of x is:" + str(shape_x))
print("the dimensionality of Y is:" + str(shape_y))
print("the data in the DataSet have " + str(m))



'''
Build a neural network:
    1.define the neural network structure
    2.parameters for initializing the model(w,b)
    3.circulate
'''
def layer_sizes(X,Y):
    """
    Parameter：
        X - the input DataSet, the dimensionality is ( the numbers of input, the numbers of train / the numbers of test)
        Y- tag, the dimensionality is ( the numbers of output, the numbers of train / the numbers of test)
    return:
        n_x - the numbers of the input layer
        n_h - the numbers of the hidden layer
        n_y - the numbers of the output layer
    """
    n_x = X.shape[0]
    n_h =4
    n_y = Y.shape[0]

    return (n_x, n_h, n_y)

def initialize_parameters(n_x, n_h, n_y):
    """
    Parameter:
        n_x - the numbers of the input layer
        n_h - the numbers of the hidden layer
        n_y - the numbers of the output layer
    return:
        parameters - include the dictionary of parameters:
            w1 - weight matrix, the dimensionality is (n_h, n_x)
            b1 - partial vector, the dimensionality is (n_h, 1)
            w2 - weight matrix, the dimensionality is (n_y, n_h)
            b2 -  partial vector, the dimensionality is (n_y, 1)
    """
    np.random.seed(2)
    w1 = np.random.randn(n_h, n_x) * 0.01
    b1 = np.zeros(shape=(n_h, 1))
    w2 = np.random.randn(n_y, n_h) * 0.01
    b2 = np.zeros(shape=(n_y, 1))
    

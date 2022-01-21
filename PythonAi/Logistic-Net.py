import numpy as np
import h5py#数据集格式是h5

def load_dataset():
    train_dataset = h5py.File("D:\\Python_resources/train_catvnoncat.h5", "r")
    train_set_x_orig = np.array(train_dataset["train_set_x"][:])#set features
    train_set_y_orig = np.array(train_dataset["train_set_y"][:])#set labels

    test_dataset = h5py.File("D:\\Python_resources/test_catvnoncat.h5", "r")
    test_set_x_orig = np.array(test_dataset["test_set_x"][:])#set features
    test_set_y_orig = np.array(test_dataset["test_set_y"][:])#set labels
    
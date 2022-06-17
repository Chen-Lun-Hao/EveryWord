import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn import datasets, linear_model
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics
from sklearn.model_selection import cross_val_predict

# read_csv 里面的参数是csv在电脑路径
data = pd.read_csv("D:\\Python_resources\\One-Linear-CCPP\\Folds5x2_pp.csv")

# 读取前5行
print(data.head())

# 准备数据集
X = data[["AT", "V", "AP", "RH"]]
print(X.head())

# 准备结果
Y = data[["PE"]]

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, random_state=1)

# 查看训练集和测试集维度
print(X_train.shape)

# 建立模型
linreg = LinearRegression()
linreg.fit(X_train, Y_train)  # 拟合

# 查看系数
print(linreg.intercept_)
print(linreg.coef_)

# 模型拟合测试集
y_pred = linreg.predict(X_test)
# 用scikit_learn计算MSE
print(metrics.mean_squared_error(Y_test, y_pred))
# 用scikit-learn计算RMSE
print(np.sqrt(metrics.mean_squared_error(Y_test, y_pred)))


# 准备数据集
X = data[["AT", "V", "AP"]]
print(X.head())

# 准备结果
Y = data[["PE"]]

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, random_state=1)

# 查看训练集和测试集维度
print(X_train.shape)

# 建立模型
linreg = LinearRegression()
linreg.fit(X_train, Y_train)  # 拟合

# 查看系数
print(linreg.intercept_)
print(linreg.coef_)

# 模型拟合测试集
y_pred = linreg.predict(X_test)
# 用scikit_learn计算MSE
print(metrics.mean_squared_error(Y_test, y_pred))
# 用scikit-learn计算RMSE
print(np.sqrt(metrics.mean_squared_error(Y_test, y_pred)))


# 准备数据集
X = data[["AT", "V", "AP", "RH"]]
print(X.head())

# 准备结果
Y = data[["PE"]]

predicted = cross_val_predict(linreg, X, Y, cv=10)


# 用scikit_learn计算MSE
print(metrics.mean_squared_error(Y, predicted))
# 用scikit-learn计算RMSE
print(np.sqrt(metrics.mean_squared_error(Y, predicted)))


fig, ax = plt.subplots()
ax.scatter(Y, predicted)
ax.plot([Y.min(), Y.max()], [Y.min(), Y.max()], 'k--', lw=4)
ax.set_xlabel('Measured')
ax.set_ylabel('Predicted')
plt.show()

#Import the necessary packages
import zipfile
import os
import io
import random
import json
import matplotlib.pyplot as plt
import numpy as np
import paddle
import paddle.fluid as fluid
from paddle.fluid.dygraph.nn import Conv2D, Linear, Embedding
from paddle.fluid.dygraph.base import to_variable

#
src_path = ""
target_path = ""
if (not os.path.isdir(target_path)):
    z = zipfile.ZipExtFile(src_path, 'r')
    z.extractall(path=target_path)
    z.close

#分别为谣言数据、非谣言数据、全部数据的文件路径
rumor_class_dirs = os.listdir(target_path+"/Chinese_Rumor_Dataset-master/CED_Dataset/rumor-repost/") # 这里填写自己项目所在的数据集路径
non_rumor_class_dirs = os.listdir(target_path+"/Chinese_Rumor_Dataset-master/CED_Dataset/non-rumor-repost/")
original_microblog = target_path+"/Chinese_Rumor_Dataset-master/CED_Dataset/original-microblog/"
#谣言标签为0，非谣言标签为1
rumor_label="0"
non_rumor_label="1"

#分别统计谣言数据与非谣言数据的总数
rumor_num = 0
non_rumor_num = 0
all_rumor_list = []
all_non_rumor_list = []

#解析谣言数据
for rumor_class_dir in rumor_class_dirs: 
    if(rumor_class_dir != '.DS_Store'):
        #遍历谣言数据，并解析
        with open(original_microblog + rumor_class_dir, 'r') as f:
	        rumor_content = f.read()
        rumor_dict = json.loads(rumor_content)
        all_rumor_list.append(rumor_label+"\t"+rumor_dict["text"]+"\n")
        rumor_num +=1
#解析非谣言数据
for non_rumor_class_dir in non_rumor_class_dirs: 
    if(non_rumor_class_dir != '.DS_Store'):
        with open(original_microblog + non_rumor_class_dir, 'r') as f2:
	        non_rumor_content = f2.read()
        non_rumor_dict = json.loads(non_rumor_content)
        all_non_rumor_list.append(non_rumor_label+"\t"+non_rumor_dict["text"]+"\n")
        non_rumor_num +=1
        
print("谣言数据总量为："+str(rumor_num))
print("非谣言数据总量为："+str(non_rumor_num))

#全部数据进行乱序后写入all_data.txt
data_list_path="/home/aistudio/data/"
all_data_path=data_list_path + "all_data.txt"
all_data_list = all_rumor_list + all_non_rumor_list

random.shuffle(all_data_list)

#在生成all_data.txt之前，首先将其清空
with open(all_data_path, 'w') as f:
    f.seek(0)
    f.truncate() 
    
with open(all_data_path, 'a') as f:
    for data in all_data_list:
        f.write(data) 
print('all_data.txt已生成')


#Data set loading,the data is preliminarily processed
import math
import numpy as np
import re

from sklearn.metrics import accuracy_score, classification_report, precision_score, recall_score


def getDateSet(dataPath=''):
    with open(dataPath, encoding='utf-8') as f:
        txt_data = f.readlines()
    data=[]#all information
    classTag=[]#tag
    for line in txt_data:
        line_split = line.strip('\n').split('\t')
        if line_split[0]=='ham':
            data.append(line_split[1])
            classTag.append(1)
        elif line_split[0]=='spam':
            data.append(line_split[1])
            classTag.append(0)
    return data, classTag

# the modle of NaiveBayes
class NaiveBates:
    #building sort
    def __init__(self):
        self.__ham_count=0 #the count of normal message
        self.__spam_count=0 #the count of spam message

        self.__ham_words_count=0 #the count of normal message word
        self.__spam_words_count=0 #the count of spam message word

        self.__ham_words=list() #the words list of normal message
        self.__spam_words=list() #the words list of spam message

        #the set of words that are not repeated in trains
        self.__word_dictionary_set=set()
        self.__word_dictionary_size=0

        self.__ham_map=dict() #the word frequency statistics in normal message
        self.__spam_map=dict() #the word frequency statistics in spam message

        self.__ham_probability=0.0
        self.__spam_probability=0.0

    #the input is the content of a message
    def data_preprocess(self, sentence):
        #converts input to lowercase and replaces special characters with spaces
        temp_info=re.sub('\W',' ',sentence.lower())
        #Break it up into words by spaces
        words=re.split(r'\s+',temp_info)
        #return all words with length greater than or equal to 3
        return list(filter(lambda x:len(x)>=3,words)) 

    #trainings model
    def fit(self, X_train, Y_train):
        words_line=[]
        for sentence in X_train:
            words_line.append(self.data_preprocess(sentence))
        self.build_word_set(words_line, Y_train)
        self.word_count()

    def build_word_set(self, X_train, y_train):
        for words, y in zip(X_train, y_train):
            if y == 0:
                # 正常短信
                self.__ham_count += 1
                self.__ham_words_count += len(words)
                for word in words:
                    self.__ham_words.append(word)
                    self.__word_dictionary_set.add(word)
            if y == 1:
                # 垃圾短信
                self.__spam_count += 1
                self.__spam_words_count += len(words)
                for word in words:
                    self.__spam_words.append(word)
                    self.__word_dictionary_set.add(word)

        self.__word_dictionary_size = len(self.__word_dictionary_set)

    def word_count(self):
        # 不同类别下的词频统计
        for word in self.__ham_words:
            self.__ham_map[word] = self.__ham_map.setdefault(word, 0) + 1

        for word in self.__spam_words:
            self.__spam_map[word] = self.__spam_map.setdefault(word, 0) + 1

        # 非垃圾短信的概率
        self.__ham_probability = self.__ham_count / (self.__ham_count + self.__spam_count)
        # 垃圾短信的概率
        self.__spam_probability = self.__spam_count / (self.__ham_count + self.__spam_count)
        print("正常短信词频：{}".format(self.__ham_map))
        print("垃圾短信词频：{}".format(self.__spam_map))
    
    def predict(self, X_test):
        return [self.predict_one(sentence) for sentence in X_test]

    def predict_one(self, sentence):
        ham_pro = 0
        spam_pro = 0
        words = self.data_preprocess(sentence)
        for word in words:
            ham_pro += math.log(
                (self.__ham_map.get(word, 0) + 1) / 
                (self.__ham_count + self.__word_dictionary_size))

            spam_pro += math.log(
                (self.__spam_map.get(word, 0) + 1) / 
                (self.__spam_count + self.__word_dictionary_size))

        ham_pro += math.log(self.__ham_probability)
        spam_pro += math.log(self.__spam_probability)
        return int(spam_pro >= ham_pro)

if __name__ == '__main__':
    #loadding DataSet
    data, classTag = getDateSet(dataPath="D:\\Python_resources\\13-rubbish-messages\\SMSSpamCollection")
    #setting training set
    train_size = 3000
    #training set
    train_x, trian_y = data[:train_size], classTag[:train_size]
    #testing set
    test_x = data[train_size:]
    test_y = classTag[train_size:]
    #traininng the model on the training set 
    nb_model =  NaiveBates()
    nb_model.fit(train_x, trian_y)
    #get the forecast outcome on the testing set
    pre_y = nb_model.predict(test_x)
    #print(pre_y)
    #print(test_y)

    #model evaluation
    accuracy_score_value = accuracy_score(test_y, pre_y)
    recall_score_value = recall_score(test_y, pre_y)
    precision_score_value = precision_score(test_y, pre_y)
    classification_report_value = classification_report(test_y, pre_y)
    print("准确率:", accuracy_score_value)
    print("召回率:", recall_score_value)
    print("精确率:", precision_score_value)
    print(classification_report_value)






        
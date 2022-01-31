#Data set loading,the data is preliminarily processed
from posixpath import split


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
        def __init__(self):
            self.__ham_count=0 #the count of normal message
            self.__spam_count=0 #the count of spam message

            self.__ham_words_count=0
            self.__spam_words_count=0

            self.__ham_words=list()
            self.__spam_words=list()


            self.__word_dictionary_set=set()
            self.__word_dictionary_size=0

            self.__ham_map=dict()
            self.__spam_map=dict()

            self.__ham_probability=0.0
            self.__spam_probability=0.0
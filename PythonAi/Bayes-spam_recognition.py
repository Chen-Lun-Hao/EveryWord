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
            
        
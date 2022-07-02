x1=[0,20,180,200,260];
y1=[0,0.064,0.376,0.46,0.516];
p1 = polyfit(x1,y1,1);
t=[0:60:300];
s=polyval(p1,t)
plot(t,s,'r-')


format long
50/3

A=[4,2;3,6]
B=exp(A)

abs(-4)
abs(3+4i)
abs('a')

round(4.7)
floor(3.6)
fix(-3.2)
ceil(-3.8)

m=345
m1=rem(m,10)
m2=rem(fix(m/10),10)
m3=fix(m/100)


% 求1到100区间的素数
x=1:100
k=isprime(x)
k1=find(k);
p=x(k1)



%变量及其操作，以字母开头
x = sqrt(7)-2i;
y = exp(pi/2);
z = (5+cosd(47))/(1+abs(x-y))

%预定义变量：pi是圆周率，NaN是非数，i和j是虚数单位

x=0:0.1:1;
y=[-0.447,1.978,3.28,6.16,7.08,7.34,7.66,9.56,9.48,9.3,11.2]
t=0:0.1:1.3;
p3=polyfit(x,y,3);
p6=polyfit(x,y,6)
s=polyval(p3,t);
s1=polyval(p6,t);

plot(t,s,'g-','linewidth',2);
hold on;
plot(t,s1,'r--','linewidth',2);
grid;

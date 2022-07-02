% �ļ�����dijkstra.m
% ���ܣ�����dijkstra�㷨�������������·��
% dist��������յ�֮�����̾���ֵ
% path�����·������
% Distance�����·���µľ���ֵ
% A���ڽӾ���
% strat�������
% dest���յ���
function [dist,path,Distance] = dijkstra(A,start,dest)
% �������� A =[0,12,inf,inf,inf,16,14;12,0,10,inf,inf,7,inf;inf,10,0,3,5,6,inf;inf,inf,3,0,4,inf,inf;inf,inf,5,4,0,2,8;16,7,6,inf,2,0,9;14,inf,inf,inf,8,9,0];
% �������� start = 1;
% �������� dest = 4;
% �����������ʱ��
tic  %��ʼ��ʱ

% ��ʼ������
p = size(A,1);        %���㶥����Ŀ 
S(1) = dest;          %��ʼ������S���Ѽ��뵽·���еĶ�����
U = 1:p;              %��ʼ������U��δ���뵽·���еĶ�����
U(dest) = [];         %ɾ���յ���
Distance = zeros(2,p);  %��ʼ�����ж��㵽�յ�dest�ľ���
Distance(1,:) = 1:p;    %�ظ�ֵ��һ��Ϊ��������
Distance(2,1:p) = A(dest,1:p);  %�ظ�ֵ�ڶ���Ϊ�ڽӾ����и����㵽�յ�ľ���
new_Distance = Distance;
D = Distance;            %��ʼ��U�����ж��㵽�յ�dest�ľ���
D(:,dest) = [];          %ɾ��U���յ��ŵ��յ��ŵľ���
path = zeros(2,p);  %��ʼ��·��
path(1,:) = 1:p;    %�ظ�ֵ��һ��Ϊ��������
path(2,Distance(2,:)~=inf) = dest;  %����ֵ��Ϊ�����ʱ��������������

% Ѱ�����·��
while ~isempty(U)  %�ж�U��Ԫ���Ƿ�Ϊ��
    index = find(D(2,:)==min(D(2,:)),1);  %ʣ�ඥ���о�����Сֵ������
    k = D(1,index);   %����ʣ�ඥ���о����յ�����Ķ�����
    
    %���¶���
    S = [S,k];     %������k��ӵ�S��
    U(U==k) = [];  %��U��ɾ������k  
    
    %�������
    new_Distance(2,:) = A(k,1:p)+Distance(2,k); %������ͨ�����k���ٴ�k�����յ�����е����ֵ
    D = min(Distance,new_Distance);  %��ԭ���ľ���ֵ�Ƚϣ�ȡ��Сֵ  
   
    %����·��
    path(2,D(2,:)~=Distance(2,:)) = k;  %�����µ���Сֵ���������ӹ�ϵ�����ӵ����k�� 
    
    %���¾���
    Distance = D;  %���¾����Ϊ���е㵽�յ����Сֵ
    D(:,S) = [];   %ɾ���Ѽ��뵽S�еĶ���
end
dist = Distance(2,start);  %ȡ��ָ����㵽�յ�ľ���ֵ
toc %��ʱ����

% ������
fprintf('�ҵ������·��Ϊ��');
while start ~= dest    %�����յ�ʱ����
    fprintf('%d-->',start);  %��ӡ��ǰ����
    next = path(2,start);    %�뵱ǰ����������һ����
    start = next;            %���µ�ǰ��
end
fprintf('%d\n',dest);
fprintf('���·����Ӧ�ľ���Ϊ��%d\n',dist);
end
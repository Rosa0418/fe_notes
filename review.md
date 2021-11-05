## 已经做过的
1. 如何复制带随机指针的链表 
    - 思路1：遍历，需要个map维护新旧node之间关系
    - 思路二：
        - 是把原链表ABCD, 新建node之后放在每一个被复制的node之后，形成A a B b C c D d
        - 更新新节点的random指针
        - 分离两个指针
2.  LRU 缓存策略
    - 思路：实现一个get方法，put方法
    - get方法：如果存在key，就返回且更新位置在有序结构的最前面，否则返回-1
    - put方法： 如果key存在则删除，或者有序结构的size>=capacity,要删除末尾的元素，最后添加进去
3. 岛屿类问题
4. 二叉树相关(套路模板)
652：寻找重复子树，待做
5. BFS
6. DFS


## 未复习到的
1. React fiber
React fiber是在16.18之后有的

2. React concurrent Mode
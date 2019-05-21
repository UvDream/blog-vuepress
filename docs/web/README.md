# web

 @flowstart
    st=>start: 前端常见手写代码
    e=>end:>http://www.google.com
    op1=>operation: 11
    sub1=>subroutine: My Subroutine
    cond=>condition: Yes
    or No?:>http://www.google.com
    io=>inputoutput: catch something...
    para=>parallel: 22

    st->op1->cond
    cond(yes)->io->e
    cond(no)->para
    para(path1, bottom)->sub1(right)->op1
    para(path2, top)->op1
@flowend
 <Vssue title="web" />

#include <iostream>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node(int val){
        data=val;
        next=NULL;
    }
};

int main(){
    // {10,100,20,200}
    Node* a = new Node(10);
    Node* b = new Node(100);
    Node* c = new Node(20);
    Node* d = new Node(200);

    a->next=b;
    b->next=c;
    c->next=d;
    d->next=NULL;

    Node* head = a;
    Node* temp = head;
    while(temp != NULL){
        cout<<temp->data<<" -> ";
        temp=temp->next;
    }
    cout<<" NULL";

}
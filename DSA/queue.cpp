#include <iostream>
using namespace std;
#define SIZE 10

class Queue{
    int arr[SIZE];
    int front, last;
    public:
    Queue(){
        front = -1;
        last = -1;
    }

    bool isFull(){
        return last == SIZE -1;
    }
    bool isEmpty(){
        return front == -1;
    }

    void display(){
        if(isEmpty()){
            cout<<"Queue is empty";
            return;
        }
        for(int i=front; i<= last; i++){
            cout<<arr[i]<<" ";
        }
    }

    void enqueue(int val){
        if(isFull()){
            cout<<"Queue is overflow";
            return;
        }
        if(isEmpty()) front = 0;
        last++;
        arr[last]=val;
    }

    void dequeue(){
        if(isEmpty()){
            cout<<"Queue is empty";
            return;
        }
        front++;
    }

    void peek(){
        cout<<"Frist: "<<arr[front]<<endl;
        cout<<"Last: "<<arr[last]<<endl;
    }
};

int main(){
    Queue q;

    q.enqueue(10);
    q.enqueue(100);
    q.enqueue(1000);
    q.enqueue(10000);
    // q.dequeue();
    q.peek();
    q.display();
}
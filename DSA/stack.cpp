#include <iostream>
using namespace std;

class Stack{
    int arr[10];
    int size;
    int top;
    public:
    Stack(int x){
        size=x;
        top = -1;
    }

    bool isEmpty(){
        return top == -1;
    }

    bool isFull(){
        return top == size - 1;
    }

    void display(){
        if(isEmpty()){
            cout<<"Stack is empty"<<endl;
        }
        for(int i=top; i>=0; i--){
            cout<<arr[i]<<" ";
        }
    }

    void push(int val){
        if(isFull()){
            cout<<"Stack is overfloew"<<endl;
        }
        top++;
        arr[top]=val;
    }

    void pop(){
        if(isEmpty()){
            cout<<"Stack is empty"<<endl;
        }
        top--;
    }

    void peek(){
        if(isEmpty()){
            cout<<"Stack is empty"<<endl;
        }
        cout<<"Element: "<<arr[top]<<endl;
    }

    int length(){
        return top + 1;
    }
};

int main(){
    Stack s(5);

    s.push(10);
    s.push(100);
    s.push(1000);
    // s.pop();
    s.peek();
    s.display();
    cout<<"Length: "<<s.length();
}
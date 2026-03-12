#include <iostream>
using namespace std;

// template <typename T>
// void show(T a){
//     cout<<"A: "<<a;
// }

// T sum(T a, T b){
//     return a+b;
// }

template <class T>
class  Student{
    T id;
    public:
    void setID(T x){
        id=x;
    }
    void getID(){
        cout<<"ID: "<<id<<endl;
    }
};

int main(){
    // show(10);
    // cout<<"Sum: "<<sum(15,20);
    Student<int> s;
    Student<float> s1;

    s.setID(10);
    s.getID();
    s1.setID(10.5);
    s1.getID();
}
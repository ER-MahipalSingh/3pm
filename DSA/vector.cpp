#include <iostream>
using namespace std;
#include <vector>

int main(){
    vector<int>v1(5);
    vector<int>v2(5,10);
    vector<int>v3={100,200,300};
    vector<int>v4;

    v4.push_back(10);
    v4.push_back(20);
    v4.push_back(100);
    v4.push_back(1000);

    v4.pop_back();

    for(int i=0; i<v4.size(); i++){
        cout<<v4[i]<<" ";
    }

    if(v4.empty()){
        cout<<"\nArr is empty"<<endl;
    }else{
        cout<<"\nArr is not empty"<<endl;
    }
}
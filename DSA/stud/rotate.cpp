#include<iostream>
using namespace std;

int main(){
    
    int arr[10]={10,20,30,40,50,60,70,80,90,100};
    int size= 10;
    int index = 2;

    for(int i=0;i<index;i++)
    {
        int temp= arr[0];
        for(int j=0;j<size;j++){
            arr[j]=arr[j+1];
        }
        arr[size-1]=temp;
    }
    for(int k=0;k<size;k++)
    {
        cout<<arr[k]<<" ";
    }
}
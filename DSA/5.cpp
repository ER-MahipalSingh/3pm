#include <iostream>
using namespace std;

int main()
{
    // int arr[5] = {10, 50, 20, 30, 5};
    // int size = 5;

    // for (int i = 0; i < size; i++){
    //     bool isLeader = true;
    //     for (int j = i + 1; j < size; j++){
    //         if (arr[i] < arr[j]){
    //             isLeader = false;
    //             // cout<<arr[j]<<" ";
    //             break;
    //         }
    //     }
    //     if (isLeader){
    //         cout << arr[i] << " ";
    //     }
    // }

    int arr[5] = {10, 20, 30, 40, 50};
    int size = 5;
    int rotateEle = 2;

    for (int i = 0; i < rotateEle; i++){
        int temp = arr[size - 1];
        for (int j = size - 1; j > 0; j--){
            arr[j] = arr[j - 1];
        }
        arr[0] = temp;
    }

    for(int i=0; i<size;i++){
        cout<<arr[i]<<" ";
    }
}
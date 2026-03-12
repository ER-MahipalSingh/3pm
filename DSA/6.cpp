#include <iostream>
using namespace std;

int main(){
    // int value = 5;
    // for (int i = 1; i <= 10; i++){
    //     cout << value << " * " << i << " = " << i * value << endl;
    // }

    int arr[6]={15,2,45,36,20,33};
    int size = 6;
    int value = 28;

    int closest=arr[0];

    for(int i=0; i<size; i++){
        int diference = arr[i] - value; 
        if(diference < 0){ 
            diference = -diference;
        }

        int closestDif = closest - value;
        if(closestDif < 0){
            closestDif = -closestDif;
        }

        if(diference < closestDif){
            closest=arr[i];
        }
    }
    cout<<"Closest value: "<<closest;
}
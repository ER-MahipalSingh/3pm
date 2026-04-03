#include <iostream>
using namespace std;
#include <vector>

class Graph{ 
    int ver;
    vector<vector<int>>arr;
    public:
        Graph(int x){
            ver=x;
            arr.resize(ver);
        }

        void addNodeUD(int a, int b){
            arr[a].push_back(b);
            arr[b].push_back(a);
        }

        void addNodeDR(int a, int b){
            arr[a].push_back(b);
        }

        void display(){
            for(int i=0; i<ver; i++){
                cout<<i<<" -> ";
                for(int nei : arr[i]){
                    cout<<nei<<" ";
                }
                cout<<endl;
            }
        }

        void dfsRec(int node, vector<bool>&visited){
            visited[node]=true;
            cout<<"Node: "<<node<<endl;

            for(int nei : arr[node]){
                if(!visited[nei]){
                    dfsRec(nei, visited);
                }
            }
        }

        void dfs(int start){
            vector<bool>visited(ver, false);
            cout<<"Start "<<start<<endl;
            dfsRec(start, visited);
            cout<<endl;
        }
};

int main(){
    Graph ud(5);

    ud.addNodeUD(0,1);
    ud.addNodeUD(0,2);
    ud.addNodeUD(1,2);
    ud.addNodeUD(2,3);
    ud.addNodeUD(2,4);
    // ud.addNodeUD(2,4);

    ud.display();
    ud.dfs(2);

    // Graph dr(5);

    // dr.addNodeDR(0,1);
    // dr.addNodeDR(1,2);
    // dr.addNodeDR(2,3);
    // dr.addNodeDR(3,4);
    // // dr.addNodeDR(0,1);
    // cout<<"\n"<<endl;
    // dr.display();
}
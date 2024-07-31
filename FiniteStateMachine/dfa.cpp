#include <iostream>
#include <string>

using namespace std;

int dfa = 0;

void state0(char c) {
    if (c == '0') {
        dfa = 1;
    } else if (c == '1') {
        dfa = 0;
    }
}

void state1(char c) {
    if (c == '0') {
        dfa = 1;
    } else if (c == '1') {
        dfa = 2;
    }
}

void state2(char c) {
    if (c == '0') {
        dfa = 1;
    } else if (c == '1') {
        dfa = 0;
    }
}

bool isAccepted(const string& s) {
    for (char c : s) {
        if (dfa == 0) {
            state0(c);
        } else if (dfa == 1) {
            state1(c);
        } else if (dfa == 2) {
            state2(c);
        } else {
            return false;
        }
    }
    return dfa == 2;
}

int main() {
    string s = "00101";
    // cout << "Enter the string: " << endl;
    // cin >> s;

    if (isAccepted(s)) {
        cout << "Yes" << endl;
    } else {
        cout << "No" << endl;
    }
    return 0;
}

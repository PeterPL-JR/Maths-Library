#include "Number.h"
#include "Integer_Number.h"

double Number::get() {
	return n;
}

int Number::GCD(int n1, int n2) {
	int result = n1;

	while (n2 != 0) {
		int t = n2;
		n2 = result % n2;
		result = t;
	}
	return result;
}
int Number::LCM(int n1, int n2) {
	return (n1 * n2) / Number::GCD(n1, n2);
}

bool Number::is_prime(int n) {
	if (n < 2) return false;

	for (int i = 2; i <= sqrt(n); i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}
bool Number::is_composite(int n) {
	if (n < 2) return false;
	return !Number::is_prime(n);
}

std::vector<int> Number::prime_factors(int n) {
	std::vector<int> factors;

	if (Number::is_prime(n)) {
		factors.push_back(n);
		return factors;
	}

	double n_sqrt = sqrt(n);
	for (int i = 2; i <= n_sqrt; i++) {
		while (n % i == 0) {
			factors.push_back(i);
			n /= i;
		}
		if (n == 1) {
			return factors;
		}
	}
	factors.push_back(n);
	return factors;
}

bool Number::is_even(int n) {
	return n % 2 == 0;
}
bool Number::is_odd(int n) {
	return n % 2 != 0;
}

bool Number::is_divisable_by(int n1, int n2) {
	return Integer_Number::is((double)n1 / (double)n2);
}
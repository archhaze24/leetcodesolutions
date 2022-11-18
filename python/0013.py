class Solution:
    roman_numbers = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'IV', 'IX', 'XL', 'XC', 'CD', 'CM']
    equals_of_roman_numbers = [1, 5, 10, 50, 100, 500, 1000, 4, 9, 40, 90, 400, 900]

    def romanToInt(self, s: str) -> int:
        last_check_of_two_digit_number = False
        answer = 0

        for i in range(len(s)):
            if last_check_of_two_digit_number:
                last_check_of_two_digit_number = False
                continue

            index = -1
            if i < len(s) - 1:
                if (s[i] + s[i + 1]) in self.roman_numbers:
                    last_check_of_two_digit_number = True
                    index = self.roman_numbers.index(s[i] + s[i + 1])

            if index == -1:
                index = self.roman_numbers.index(s[i])

            answer = answer + self.equals_of_roman_numbers[index]

        return answer


print(Solution().romanToInt('IVI'))

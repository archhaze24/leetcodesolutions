class Solution:
    def isPalindrome(self, x: int) -> bool:
        reversed_number = list(str(x))
        reversed_number.reverse()

        return reversed_number == list(str(x))


print(Solution().isPalindrome(111))

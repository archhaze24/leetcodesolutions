from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        temp_set = set()

        for num in nums:
            if num in temp_set:
                return True
            temp_set.add(num)

        return False




print(Solution().containsDuplicate([1, 2, 3, 4, 4]))
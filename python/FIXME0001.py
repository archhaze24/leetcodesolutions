from typing import List


# FIXME: find a faster solution. this doesn't satisfy the time limit.
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]


print(Solution().twoSum([2, 3, 4], 6))

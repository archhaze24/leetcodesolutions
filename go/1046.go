package main

import (
	"sort"
)

func lastStoneWeight(stones []int) int {
	for len(stones) > 1 {
		sort.Slice(stones, func(i, j int) bool {
			return stones[i] < stones[j]
		})

		lastTwoStones := stones[len(stones)-2:]
		if lastTwoStones[1] == lastTwoStones[0] {
			stones = stones[:len(stones)-2]
		} else {
			stones = append(stones[:len(stones)-2], lastTwoStones[1]-lastTwoStones[0])
		}
	}

	if len(stones) == 0 {
		return 0
	} else {
		return stones[0]
	}
}

func main() {
	println(lastStoneWeight([]int{2, 7, 4, 1, 8, 1}))
	println(lastStoneWeight([]int{1}))
}

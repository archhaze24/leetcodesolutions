type SmallestInfiniteSet struct {
	set []int
}

func Constructor() SmallestInfiniteSet {
	instance := SmallestInfiniteSet{
		set: make([]int, 0, 1000),
	}

	for i := 1; i <= 1000; i++ {
		instance.set = append(instance.set, i)
	}

	return instance
}

func (this *SmallestInfiniteSet) PopSmallest() int {
	num := this.set[0]
	this.set = this.set[1:]
	return num
}

func (this *SmallestInfiniteSet) AddBack(num int) {
	var indexToInsert int

	for i, v := range this.set {
		indexToInsert = i
		if v == num {
			return
		} else if v > num {
			break
		}
	}

	this.set = append(this.set[:indexToInsert+1], this.set[indexToInsert:]...)
	this.set[indexToInsert] = num
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.PopSmallest();
 * obj.AddBack(num);
 */

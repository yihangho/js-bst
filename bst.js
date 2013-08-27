function BST()
{
	this.size = 0;
	var container = new Array();
	this.insert = function(key, val)
	{
		if (this.search(key)) return;
		if (typeof val === "undefined")
			val = false;
		var new_idx = container.length, cur_idx = 0;
		container.push(new BSTItem(key, val));
		this.size = new_idx+1;
		while (key !== container[cur_idx].key)
		{
			if (key < container[cur_idx].key)
			{
				if (container[cur_idx].left === false)
					container[cur_idx].left = new_idx;
				cur_idx = container[cur_idx].left;
			}
			else
			{
				if (container[cur_idx].right === false)
					container[cur_idx].right = new_idx;
				cur_idx = container[cur_idx].right;
			}
		}
	};
	this.search = function(key)
	{
		if (container.length == 0) return false;
		var cur_idx = 0;
		while (cur_idx !== false)
		{
			if (key === container[cur_idx].key) return true;
			else if (key < container[cur_idx].key) cur_idx = container[cur_idx].left;
			else cur_idx = container[cur_idx].right;
		}
		return false;
	};
	this.get = function(key)
	{
		if (container.length == 0) return undefined;
		var cur_idx = 0;
		while (cur_idx !== false)
		{
			if (key === container[cur_idx].key) return container[cur_idx].val;
			else if (key < container[cur_idx].key) cur_idx = container[cur_idx].left;
			else cur_idx = container[cur_idx].right;
		}
		return undefined;
	};
	this.size = function()
	{
		return container.length;
	}
}

function BSTItem(key, val)
{
	this.key = key
	this.left = false;
	this.right = false;
	this.val = val;
}
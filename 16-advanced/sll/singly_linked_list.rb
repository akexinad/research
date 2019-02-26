class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize value
      @value = value
      @next = nil
    end
  end

  attr_accessor :head
  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) #AKA unshift method
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value) # AKA push
    last.next = Node.new value
  end

  def last
    node = @head
    while node && node.next
      node = node.next
    end
    node
  end

  def remove # AKA shift
    # TODO: Return nil where there are no nodes left

    node = @head
    if @head.nil?
      return nil
    else
      @head = @head.next
      node.value
    end
  end

  # TODO
  def insert_after(node, new_value)


  end

  # TODO
  def find(needle)
    # return the node with a value of needle, or nil
  end

  # TODO: tricky
  def reverse
    #return a new singly linked list with the nodes in reverse order
  end

  # TODO: tricker
  def reverse!
    # destructive reverse, it doesn't return a new list, it will return the original list modified.
  end

  # TODO: tricky -- how do you accept/ivoke a block
  def each

  end

  # .map .reduce and so on.
  # BONUS: .at_index(7) similar to bros[7]

end

bros = SinglyLinkedList.new 'Groucho'
bros.append 'Harpo'
bros.append 'Gummo'
# bros.append 'Chico'
# bros.append 'Zeppo'

require 'pry'
binding.pry

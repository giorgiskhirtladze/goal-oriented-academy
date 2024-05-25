def smash(words):
    
    s = ' '
    
    for i in words:
        s = s + i + ' '
        
    s = s.strip()
    
    return s



def difference_in_ages(ages):
    youngest = min(ages)
    oldest = max(ages)
    diferance = oldest - youngest
    
    return (youngest, oldest, diferance)



def get_sum(a,b):
    if a == b:
        return a
    small, big = sorted([a, b])
    return sum ([i for i in range(small, big + 1)])



def find_short(s):
    s_list = s.split()
    starting_point = len(s_list[0])
    for word in s_list:
        if len(word) < starting_point:
            starting_point = len(word)
    return starting_point
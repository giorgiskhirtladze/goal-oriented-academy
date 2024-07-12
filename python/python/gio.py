print('welcome to my computer quiz!')

playing = input('do you want to play? ')

if playing != 'yes':
    quit()
print('okay! Lets play :)')

score = 0

answer = input('what is the capital of France? ')
if answer == 'Paris':
    print('correct!')
    score += 1
else:
    print('incorrect!')

answer = input('what is the capital of Georgia? ')
if answer == 'Tbilisi':
    print('correct!')
    score += 1
else:
    print('incorrect!')

answer = input('what is the capital of Germany? ')
if answer == 'Berlin':
    print('correct!')
    score += 1
else:
    print('incorrect!')

print('you got ' + str(score) + 'questions correct!')

print('you got ' + str((score/3) * 100) + '%.')
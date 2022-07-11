//runtime complexity - O(n^2)
function sumZero(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === 0)
            {
                return true
            }
        }
    }
    return false
}

let numArr = [1,2,-2,4]
console.log(sumZero(numArr))


//runtime complexity - O(n^2)
function uniqueChars(string)
{
    let bool = true
    for(let i = 0; i < string.length; i++)
    {
        for(let j = 0; j < string.length; j++)
        {
            if(string.charAt(i) === string.charAt(j))
            {
                bool = false
            }
        }
    }
    return bool
}

let string = 'monday'
console.log(uniqueChars(string))

//runtime complexity - O(n^2)
function isPangram(sentence)
{
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let i = 0; i < alphabet.length; i++)
    {
        if(!sentence.includes(alphabet[i]))
        {
            return false
        }
    }
    return true
}

let sentence = 'the quick brown fox jumps over the lazy dog'
console.log(isPangram(sentence))


//runtime complexity - O(n)
function longestWord(arr)
{
    let currLength = arr[0].length
    let returnWord = arr[0]
    for(let i = 0; i < arr.length; i++)
    {
        if(currLength < arr[i].length)
        {
            returnWord = arr[i]
        }
    }
    return returnWord
}

let wordArr = ['Hi Jared', 'hey']
console.log(longestWord(wordArr))
//generics

function useState<T>(initial: T): [T, (newValue: T) => void] {
    let value = initial
    function setValue(newValue: T) {
        value = newValue
    }
    return [value, setValue]
}

let [value, setValue] = useState<number>(2);
let [userName, setUserName] = useState('admin');

value++


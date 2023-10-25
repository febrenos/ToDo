

const schema () => {
    name: string("this accept only string").required("this is required"),
    age: number("this accept only number").required("this is required"),
}

const Contexto = () =>{
    salvar: {(obj) => ()},
    editar: {() => ()},
    lista = []
}

const Registro = () =>{
    const context = Context();

    cosnt [ getName, setName] = useReact("");
    cosnt [ getAge, setAge] = useReact(0);
    cosnt [ getNameError, setNameError] = useReact("");
    cosnt [ getAgeError, setAgeError] = useReact("");


    const handleSalvar = () =>{
        setNameError("")
        setAgeError("")

        schema
            .validate({name, age}, {":false"})
            .than(context = salvar())
            .catch((error) =>
            error.inner.forEach((e) =>{
                    if(e.path === "name"){
                        setNameError(e.message)
                    }
                    if(e.path === "age"){
                        setNameError(e.message)
                    }
                }
            )
            )
    }
    return(
        <View>
            <TextInput value={getName} onchageValue={setAge} placeholder="name"/>
            <Text>
                {getNameError}
            <Text/>
            <TextInput value={getAge} onchageValue={setAge} placeholder="age"/>
            <Text>
                {getNameError}
            <Text/>
            <Button />
            <Button onPress={context.salvar}/>
        </View>
    )

}

const Lista({obj}){
    <View>
        <Text>"name: ${obj.name}"</Text>
        <Text>"age: ${obj.age}"</Text>
    </View>
}

const {Screen,Navigator} = createBottomTabNavigator();

export default function App(){
    const salvar = () =>{
        api.post("./obj.json", {obj})
        .than()
        .catch()
    }

    const Listar = () =>{
        const items = api.get("./obj.json")
        for(e in items){
            list.push(items)
        }
    }


    return(
        <Navigator>
            <Screen name="cadastro" component={Registro}/>
            <Screen name="listagem" component={Lista}/>
        </Navigator>
    )
}
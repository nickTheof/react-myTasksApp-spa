const Header = () => {
    return (
        <>
            <header className="w-full h-20 bg-cf-red-100 p-4 flex items-center justify start gap-x-4">
                <img className="h-16 w-auto transparent" src="/tasks-react-logo.png" alt="A Task board together with React logo"/>
                <span className="block font-thin text-white text-xl">My Tasks App</span>
            </header>
        </>
    )
}

export default Header;
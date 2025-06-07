const Footer = () => {
    return (
        <>
            <footer className="w-full border-t-2 border-cf-red-100 p-4 ">
                <div className="flex flex-wrap justify-between items-center p-4">
                    <div className="flex justify-start items-center gap-4">
                        <a href="">
                            <span className="text-cf-red-100"><i className="fa-brands fa-facebook-f"></i></span>
                        </a>
                        <a href="">
                            <span className="text-cf-red-100"><i className="fa-brands fa-instagram"></i></span>
                        </a>
                        <a href="">
                            <span className="text-cf-red-100"><i className="fa-brands fa-linkedin-in"></i></span>
                        </a>
                        <a href="">
                            <span className="text-cf-red-100"><i className="fa-brands fa-x-twitter"></i></span>
                        </a>
                    </div>
                    <div className="text-end">
                        <span className="text-sm">Copyright © 2025, <span className="text-cf-red-200">Nikolaos Theofanis</span></span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
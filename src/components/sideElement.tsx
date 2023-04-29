import Link from 'next/link';

const SideElement = () => {
    return (
        <div className="flex flex-col align-middle">
            <ul>
                <li>
                    <Link href="https://github.com/k3ithloh">
                        <img src='/static/img/github.svg' alt="Github" />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/keithlohjj/">
                        <img src='/static/img/linkedin.svg' alt="LinkedIn" />
                    </Link>
                </li>
                <li>
                    <Link href="https://twitter.com/k3ithloh">
                        <img src='/static/img/twitter.svg' alt="Twitter" />
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default SideElement;
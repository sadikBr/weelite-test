import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav class='bg-white-800 max-w-7xl mx-auto py-8'>
      <div>
        <div class='relative flex items-center justify-between h-16'>
          <div class='block'>
            <div class='flex space-x-4'>
              <Link
                to='/'
                class='text-black pr-3 py-2 text-sm font-bold'
                aria-current='page'
              >
                Home
              </Link>

              <Link
                to='/guides'
                class='text-black pr-3 py-2 text-sm font-medium'
              >
                Guides
              </Link>

              <Link
                to='/flights'
                class='text-black pr-3 py-2 text-sm font-medium'
              >
                Flights
              </Link>

              <Link
                to='/about'
                class='text-black pr-3 py-2 text-sm font-medium'
              >
                About
              </Link>
            </div>
          </div>

          <button className='font-bold border border-2 border-black rounded px-4 py-1'>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

import Image from "next/image";
import Link  from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  

const Navbar = () => {
  return (

<div >
<header className="bg-white ">
    <nav className=" flex max-w-7xl mx-auto gap-5 justify-between mt-6 sm:px-6  lg:flex-row px-8 ">
        {/* logo */}
        <div >  
            <Link  href="/" className="flex gap-2 "><Image src="/logo.png" alt="logo" width={40} height={40} /> <span className="text-2xl font-bold">Nexcent</span></Link>
        </div> 
        {/* menu */}

<NavigationMenu className="hidden lg:flex">
  <NavigationMenuList >
    <NavigationMenuItem className="
    flex space-x-9" >
    <NavigationMenuLink>Home</NavigationMenuLink>
    <NavigationMenuLink>Service</NavigationMenuLink>
        <NavigationMenuLink>Feature</NavigationMenuLink>
        <NavigationMenuLink>Product</NavigationMenuLink>
        <NavigationMenuLink>Testimonial</NavigationMenuLink>
        <NavigationMenuLink>FAQ</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>


<NavigationMenu className=" lg:hidden">
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Home</NavigationMenuTrigger>
      <NavigationMenuContent className="flex flex-col gap-4 p-7 ">
      <NavigationMenuLink className="bg-[#4CAF4F] px-[20] py-[10] text-white rounded-xl">Service</NavigationMenuLink>
        <NavigationMenuLink className="bg-[#4CAF4F] px-[20] py-[10] text-white rounded-xl">Feature</NavigationMenuLink>
        <NavigationMenuLink className="bg-[#4CAF4F] px-[20] py-[10] text-white rounded-xl">Product</NavigationMenuLink>
        <NavigationMenuLink className="bg-[#4CAF4F] px-[20] py-[10] text-white rounded-xl">Testimonial</NavigationMenuLink>
        <NavigationMenuLink className="bg-[#4CAF4F] px-[20] py-[10] text-white rounded-xl">FAQ</NavigationMenuLink>      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>



    {/* button */}

   <div className="flex gap-4 lg:flex-row lg:gap-5">
 <button className="
 text-[#4CAF4F]">Login</button>
   <button className="bg-[#4CAF4F] px-[20] py-[10] text-white rounded-xl">Sign up</button>
   </div>
    </nav>
</header>
</div>

)
}

export default Navbar
import React, { useRef, useState } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { api, api_key } from "../api/index";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

const Header = () => {
  const movieName = useRef("");

  const dispatch = useDispatch();

  const searchMovie = async () => {
    if (movieName.current.value !== "") {
      const res = await api.get(
        `/search/movie?query=${movieName.current.value}&api_key=${api_key}`,
      );
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  };

  return (
    <div>
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Biscope TV
          </span>
        </NavbarBrand>
        <div className="flex items-center gap-3 md:order-2">
          <form className="flex items-center gap-2  rounded-full shadow-sm px-3 py-1">
            <TextInput
              placeholder="Search movies..."
              ref={movieName}
              className="border-none focus:ring-0 w-40 md:w-56"
            />

            <Button
              type="button"
              onClick={() => searchMovie()}
              color="dark"
              pill
              className="px-4 py-1 text-sm font-medium"
            >
              Search
            </Button>
          </form>

          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default Header;

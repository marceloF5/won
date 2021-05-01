import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from '../MediaMatch'
import * as S from './styles'
import React, { useState } from 'react'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import UserDropdown from 'components/UserDropdown'

export type MenuProps = {
    username?: string | null
    loading?: boolean
}

const Menu = ({ username, loading }: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <S.Wrapper>
            <MediaMatch lessThan="medium">
                <S.IconWrapper onClick={() => setIsOpen(true)}>
                    <MenuIcon aria-label="Open Menu" />
                </S.IconWrapper>
            </MediaMatch>

            <S.LogoWrapper>
                <Link href="/" passHref>
                    <a>
                        <Logo hideOnMobile />
                    </a>
                </Link>
            </S.LogoWrapper>

            <MediaMatch greaterThan="medium">
                <S.MenuNav>
                    <Link href="/" passHref>
                        <S.MenuLink href="#">Home</S.MenuLink>
                    </Link>
                    <Link href="/games" passHref>
                        <S.MenuLink>Explore</S.MenuLink>
                    </Link>
                </S.MenuNav>
            </MediaMatch>
            {!loading && (
                <>
                    <S.MenuGroup>
                        <S.IconWrapper>
                            <SearchIcon aria-label="Search" />
                        </S.IconWrapper>
                        <S.IconWrapper>
                            <MediaMatch greaterThan="medium">
                                <CartDropdown />
                            </MediaMatch>
                            <MediaMatch lessThan="medium">
                                <Link href="/cart">
                                    <a>
                                        <CartIcon />
                                    </a>
                                </Link>
                            </MediaMatch>
                        </S.IconWrapper>

                        <MediaMatch greaterThan="medium">
                            {!username ? (
                                <Link href="/sign-in" passHref>
                                    <Button as="a">Sign in</Button>
                                </Link>
                            ) : (
                                <UserDropdown username={username} />
                            )}
                        </MediaMatch>
                    </S.MenuGroup>

                    <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
                        <CloseIcon
                            aria-label="Close Menu"
                            onClick={() => setIsOpen(false)}
                        />
                        <S.MenuNav>
                            <Link href="/" passHref>
                                <S.MenuLink>Home</S.MenuLink>
                            </Link>
                            <Link href="/games" passHref>
                                <S.MenuLink>Explore</S.MenuLink>
                            </Link>
                            {!!username && (
                                <>
                                    <Link href="/profile/me" passHref>
                                        <S.MenuLink>My profile</S.MenuLink>
                                    </Link>
                                    <Link href="/wishlist" passHref>
                                        <S.MenuLink>Wishlist</S.MenuLink>
                                    </Link>
                                </>
                            )}
                        </S.MenuNav>
                        {!username && (
                            <S.RegisterBox>
                                <Link href="/sign-in" passHref>
                                    <Button as="a" fullWidth size="large">
                                        Sign in now
                                    </Button>
                                </Link>
                                <span>or</span>
                                <Link href="/sign-up" passHref>
                                    <S.CreateAccount href="#" title="Sign up">
                                        Sign up
                                    </S.CreateAccount>
                                </Link>
                            </S.RegisterBox>
                        )}
                    </S.MenuFull>
                </>
            )}
        </S.Wrapper>
    )
}

export default Menu

// @ts-nocheck
import React from 'react'
import { Link } from 'react-router'
import { Search } from 'main/components/blog'
import { CloseButton } from 'main/components/misc'

export default class FilterNavigation extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    location: React.PropTypes.object,
    includeSearch: React.PropTypes.bool,
  }

  static defaultProps = {
    includeSearch: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      searchOpen: false,
      navOpen: false,
    }
  }

  toggleSearchScreen = () => {
    const { searchOpen } = this.state

    if (!searchOpen) {
      document.body.classList.add('no-scroll')
      setTimeout(() => document.getElementsByClassName('search__input')[0].focus(), 251) // Focus search input after 251ms (opening animation takes 250ms)
    } else {
      document.body.classList.remove('no-scroll')
    }

    this.setState({ searchOpen: !searchOpen })
  }

  handleActiveNavItem = () => {
    const { location: { pathname }, data } = this.props
    const active = data.filter(item =>
       item.link === pathname
    )

    if (active.length) {
      return active[0].title
    }

    // when filtering by another tags outside of navigation
    // or by authors in case of blog
    const backup = pathname.split('/').pop().replace(/-/g, ' ')

    return backup
  }

  toggleMobileNavigation = () => {
    const { navOpen } = this.state

    if (!navOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    this.setState({ navOpen: !navOpen })
  }

  closeMobileNavigation = () => {
    if (this.state.navOpen) {
      this.setState({ navOpen: false })
      document.body.classList.remove('no-scroll')
    }
  }

  render() {
    const { searchOpen, navOpen } = this.state
    const { data, includeSearch } = this.props

    return (
      <div className="navigation">
        <button type="button" className="navigation__mobile" onClick={this.toggleMobileNavigation}>
          <span className="navigation__mobile-label">Show: </span>
          <span className="navigation__mobile-active">{this.handleActiveNavItem()}</span>
        </button>
        <ul className={`navigation__list list--inline ${navOpen ? 'opened' : ''}`}>
          {data.map(item =>

            <li key={item.title} className="navigation__item">
              <Link to={`${item.link}`} className="navigation__link hover--flip" onClick={this.closeMobileNavigation} activeClassName="active" data-text={item.title} key={`navFilter-${item.id}`}>
                <span>{item.title}</span>
              </Link>
            </li>

          )}
          <li>
            <CloseButton onClick={this.toggleMobileNavigation} className={`navigation__close btn-close--in-fullscreen ${navOpen ? 'show' : ''}`} />
          </li>
        </ul>
        {includeSearch &&
          <button type="button" className="navigation__btn-search icon icon-search" onClick={this.toggleSearchScreen}>
            <span className="d-hidden">Search</span>
          </button>
        }
        {includeSearch &&
          <Search open={searchOpen} onClick={this.toggleSearchScreen} />
        }
      </div>
    )
  }
}

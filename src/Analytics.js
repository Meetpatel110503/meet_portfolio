import ReactGA from "react-ga"

export const initGA = () => {
  const TRACK_ID = process.env.REACT_APP_TRACK_ID
  ReactGA.initialize(TRACK_ID)
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

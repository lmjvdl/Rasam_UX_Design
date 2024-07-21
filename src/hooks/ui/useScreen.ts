import { useMediaQuery } from '@uidotdev/usehooks'

export default function useScreen() {
  const isLandscape = useMediaQuery('(orientation: landscape)')
  const hasNarrowHeight = useMediaQuery('(max-height: 575px)')
  const hasNarrowWidth = useMediaQuery('(max-width: 575px)')

  const isPortrait = !isLandscape
  const isMobileLandscape = isLandscape && hasNarrowHeight
  const isMobilePortrait = isPortrait && hasNarrowWidth
  const isMobile = isMobileLandscape || isMobilePortrait
  const isDesktop = !isMobile

  return {
    isLandscape,
    isMobileLandscape,
    isMobilePortrait,
    isPortrait,
    isMobile,
    isDesktop,
  }
}

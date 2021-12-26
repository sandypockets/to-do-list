if (!process.env.SUPABASE_URL) {
  console.log('constants.js', 'Make sure you have a `.env` file to populate your variables.')
}

export const SUPABASE_URL = process.env.REACT_NATIVE_SUPABASE_URL || ''
export const SUPABASE_ANON_KEY = process.env.REACT_NATIVE_SUPABASE_ANON_KEY || ''

export const Styles = {
  fontNormal: 20,
  fontMedium: 28,
  fontLarge: 34,
  fontExtraLarge: 40,
  colorPrimary: 'black',
  spacing: 12,
}

export const GlobalStyles = {
  container: {
    marginTop: 40,
    padding: Styles.spacing,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Helvetica",
    marginTop: 24,
    marginHorizontal: 10,
    fontWeight: "600"
  },
  subHeaderText: {
    fontSize: 18,
    fontFamily: "Helvetica",
    marginTop: 10,
    marginHorizontal: 10
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
    marginHorizontal: 5
  }
}
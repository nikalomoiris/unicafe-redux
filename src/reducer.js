const initialState = {
        good: 1,
        ok: 1,
        bad: 1
}

let changedState = {
    good: 1,
    ok: 1,
    bad: 1
}

  const counterReducer = (state = initialState, action) => {
        console.log(action)
        switch (action.type) {
            case 'GOOD':
                changedState = {
                    ...state,
                    good: state.good + 1
                }
                return changedState
        case 'OK':
                changedState = {
                    ...state,
                    ok: state.ok + 1
                }
                return changedState
        case 'BAD':
                changedState = {
                    ...state,
                    bad: state.bad + 1
                }
                return changedState
        case 'ZERO':
                changedState = {
                    good: 0,
                    ok: 0,
                    bad: 0
                }
                return changedState
        default:
            return state
    }
  }

  export default counterReducer
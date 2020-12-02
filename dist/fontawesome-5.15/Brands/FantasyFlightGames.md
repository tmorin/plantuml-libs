# Fantasy Flight Games

```text
fontawesome-5.15/Brands/FantasyFlightGames
```

```text
include('fontawesome-5.15/Brands/FantasyFlightGames')
```

|icon|element|
|---|---|
|![](FantasyFlightGames.png)|![](FantasyFlightGames.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the FantasyFlightGames element
include('fontawesome-5.15/Brands/FantasyFlightGames')
FantasyFlightGames('fantasy_flight_games', 'Fantasy Flight Games', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the FantasyFlightGames element
include('fontawesome-5.15/Brands/FantasyFlightGames')
FantasyFlightGames('fantasy_flight_games', 'Fantasy Flight Games', 'an optional tech field')
@enduml
```


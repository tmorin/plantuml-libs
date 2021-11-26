# FantasyFlightGames


```text
fontawesome-5/Brands/FantasyFlightGames
```

```text
include('fontawesome-5/Brands/FantasyFlightGames')
```



| Illustration | FantasyFlightGames |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FantasyFlightGames.png) | ![illustration for FantasyFlightGames](../../fontawesome-5/Brands/FantasyFlightGames.Local.png) |




## FantasyFlightGames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FantasyFlightGames
include('fontawesome-5/Brands/FantasyFlightGames')

' renders the element
FantasyFlightGames('FantasyFlightGames', 'Fantasy Flight Games', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FantasyFlightGames
include('fontawesome-5/Brands/FantasyFlightGames')

' renders the element
FantasyFlightGames('FantasyFlightGames', 'Fantasy Flight Games', 'an optional tech label')
@enduml
```


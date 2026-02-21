# GolfBallTee


```text
fontawesome/Solid/GolfBallTee
```

```text
include('fontawesome/Solid/GolfBallTee')
```



| Illustration | GolfBallTee |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GolfBallTee.png) | ![illustration for GolfBallTee](../../fontawesome/Solid/GolfBallTee.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GolfBallTeeXs>`
- `<$GolfBallTeeSm>`
- `<$GolfBallTeeMd>`
- `<$GolfBallTeeLg>`





## GolfBallTee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GolfBallTee
include('fontawesome/Solid/GolfBallTee')

' renders the element
GolfBallTee('GolfBallTee', 'Golf Ball Tee', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element GolfBallTee
include('fontawesome/Solid/GolfBallTee')

' renders the element
GolfBallTee('GolfBallTee', 'Golf Ball Tee', 'an optional tech label', 'an optional description')
@enduml
```


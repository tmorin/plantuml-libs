# GolfBall


```text
fontawesome/Solid/GolfBall
```

```text
include('fontawesome/Solid/GolfBall')
```



| Illustration | GolfBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GolfBall.png) | ![illustration for GolfBall](../../fontawesome/Solid/GolfBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GolfBallXs>`
- `<$GolfBallSm>`
- `<$GolfBallMd>`
- `<$GolfBallLg>`





## GolfBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GolfBall
include('fontawesome/Solid/GolfBall')

' renders the element
GolfBall('GolfBall', 'Golf Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GolfBall
include('fontawesome/Solid/GolfBall')

' renders the element
GolfBall('GolfBall', 'Golf Ball', 'an optional tech label', 'an optional description')
@enduml
```


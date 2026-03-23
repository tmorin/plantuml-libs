# SoccerBall


```text
fontawesome/Solid/SoccerBall
```

```text
include('fontawesome/Solid/SoccerBall')
```



| Illustration | SoccerBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SoccerBall.png) | ![illustration for SoccerBall](../../fontawesome/Solid/SoccerBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SoccerBallXs>`
- `<$SoccerBallSm>`
- `<$SoccerBallMd>`
- `<$SoccerBallLg>`





## SoccerBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SoccerBall
include('fontawesome/Solid/SoccerBall')

' renders the element
SoccerBall('SoccerBall', 'Soccer Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SoccerBall
include('fontawesome/Solid/SoccerBall')

' renders the element
SoccerBall('SoccerBall', 'Soccer Ball', 'an optional tech label', 'an optional description')
@enduml
```


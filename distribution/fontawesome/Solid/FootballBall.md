# FootballBall


```text
fontawesome/Solid/FootballBall
```

```text
include('fontawesome/Solid/FootballBall')
```



| Illustration | FootballBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FootballBall.png) | ![illustration for FootballBall](../../fontawesome/Solid/FootballBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FootballBallXs>`
- `<$FootballBallSm>`
- `<$FootballBallMd>`
- `<$FootballBallLg>`





## FootballBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FootballBall
include('fontawesome/Solid/FootballBall')

' renders the element
FootballBall('FootballBall', 'Football Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FootballBall
include('fontawesome/Solid/FootballBall')

' renders the element
FootballBall('FootballBall', 'Football Ball', 'an optional tech label', 'an optional description')
@enduml
```


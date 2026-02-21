# BowlingBall


```text
fontawesome/Solid/BowlingBall
```

```text
include('fontawesome/Solid/BowlingBall')
```



| Illustration | BowlingBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BowlingBall.png) | ![illustration for BowlingBall](../../fontawesome/Solid/BowlingBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BowlingBallXs>`
- `<$BowlingBallSm>`
- `<$BowlingBallMd>`
- `<$BowlingBallLg>`





## BowlingBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BowlingBall
include('fontawesome/Solid/BowlingBall')

' renders the element
BowlingBall('BowlingBall', 'Bowling Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BowlingBall
include('fontawesome/Solid/BowlingBall')

' renders the element
BowlingBall('BowlingBall', 'Bowling Ball', 'an optional tech label', 'an optional description')
@enduml
```


# BowlingBall


```text
fontawesome-5/Solid/BowlingBall
```

```text
include('fontawesome-5/Solid/BowlingBall')
```



| Illustration | BowlingBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BowlingBall.png) | ![illustration for BowlingBall](../../fontawesome-5/Solid/BowlingBall.Local.png) |




## BowlingBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BowlingBall
include('fontawesome-5/Solid/BowlingBall')

' renders the element
BowlingBall('BowlingBall', 'Bowling Ball', 'an optional tech label')
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

' loads the Item which embeds the element BowlingBall
include('fontawesome-5/Solid/BowlingBall')

' renders the element
BowlingBall('BowlingBall', 'Bowling Ball', 'an optional tech label')
@enduml
```


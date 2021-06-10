# FootballBall


```text
fontawesome-5/Solid/FootballBall
```

```text
include('fontawesome-5/Solid/FootballBall')
```



| Illustration | FootballBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FootballBall.png) | ![illustration for FootballBall](../../fontawesome-5/Solid/FootballBall.Local.png) |




## FootballBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FootballBall
include('fontawesome-5/Solid/FootballBall')

' renders the element
FootballBall('FootballBall', 'Football Ball', 'an optional tech label')
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

' loads the Item which embeds the element FootballBall
include('fontawesome-5/Solid/FootballBall')

' renders the element
FootballBall('FootballBall', 'Football Ball', 'an optional tech label')
@enduml
```


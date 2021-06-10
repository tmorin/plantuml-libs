# GolfBall


```text
fontawesome-5/Solid/GolfBall
```

```text
include('fontawesome-5/Solid/GolfBall')
```



| Illustration | GolfBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GolfBall.png) | ![illustration for GolfBall](../../fontawesome-5/Solid/GolfBall.Local.png) |




## GolfBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GolfBall
include('fontawesome-5/Solid/GolfBall')

' renders the element
GolfBall('GolfBall', 'Golf Ball', 'an optional tech label')
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

' loads the Item which embeds the element GolfBall
include('fontawesome-5/Solid/GolfBall')

' renders the element
GolfBall('GolfBall', 'Golf Ball', 'an optional tech label')
@enduml
```


# BaseballBall


```text
fontawesome-5/Solid/BaseballBall
```

```text
include('fontawesome-5/Solid/BaseballBall')
```



| Illustration | BaseballBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BaseballBall.png) | ![illustration for BaseballBall](../../fontawesome-5/Solid/BaseballBall.Local.png) |




## BaseballBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BaseballBall
include('fontawesome-5/Solid/BaseballBall')

' renders the element
BaseballBall('BaseballBall', 'Baseball Ball', 'an optional tech label')
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

' loads the Item which embeds the element BaseballBall
include('fontawesome-5/Solid/BaseballBall')

' renders the element
BaseballBall('BaseballBall', 'Baseball Ball', 'an optional tech label')
@enduml
```


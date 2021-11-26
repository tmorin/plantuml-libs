# BasketballBall


```text
fontawesome-5/Solid/BasketballBall
```

```text
include('fontawesome-5/Solid/BasketballBall')
```



| Illustration | BasketballBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BasketballBall.png) | ![illustration for BasketballBall](../../fontawesome-5/Solid/BasketballBall.Local.png) |




## BasketballBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BasketballBall
include('fontawesome-5/Solid/BasketballBall')

' renders the element
BasketballBall('BasketballBall', 'Basketball Ball', 'an optional tech label')
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

' loads the Item which embeds the element BasketballBall
include('fontawesome-5/Solid/BasketballBall')

' renders the element
BasketballBall('BasketballBall', 'Basketball Ball', 'an optional tech label')
@enduml
```


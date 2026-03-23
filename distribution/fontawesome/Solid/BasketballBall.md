# BasketballBall


```text
fontawesome/Solid/BasketballBall
```

```text
include('fontawesome/Solid/BasketballBall')
```



| Illustration | BasketballBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BasketballBall.png) | ![illustration for BasketballBall](../../fontawesome/Solid/BasketballBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BasketballBallXs>`
- `<$BasketballBallSm>`
- `<$BasketballBallMd>`
- `<$BasketballBallLg>`





## BasketballBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BasketballBall
include('fontawesome/Solid/BasketballBall')

' renders the element
BasketballBall('BasketballBall', 'Basketball Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BasketballBall
include('fontawesome/Solid/BasketballBall')

' renders the element
BasketballBall('BasketballBall', 'Basketball Ball', 'an optional tech label', 'an optional description')
@enduml
```


# BaseballBall


```text
fontawesome/Solid/BaseballBall
```

```text
include('fontawesome/Solid/BaseballBall')
```



| Illustration | BaseballBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BaseballBall.png) | ![illustration for BaseballBall](../../fontawesome/Solid/BaseballBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BaseballBallXs>`
- `<$BaseballBallSm>`
- `<$BaseballBallMd>`
- `<$BaseballBallLg>`





## BaseballBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BaseballBall
include('fontawesome/Solid/BaseballBall')

' renders the element
BaseballBall('BaseballBall', 'Baseball Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BaseballBall
include('fontawesome/Solid/BaseballBall')

' renders the element
BaseballBall('BaseballBall', 'Baseball Ball', 'an optional tech label', 'an optional description')
@enduml
```


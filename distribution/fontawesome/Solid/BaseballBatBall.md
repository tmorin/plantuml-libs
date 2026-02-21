# BaseballBatBall


```text
fontawesome/Solid/BaseballBatBall
```

```text
include('fontawesome/Solid/BaseballBatBall')
```



| Illustration | BaseballBatBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BaseballBatBall.png) | ![illustration for BaseballBatBall](../../fontawesome/Solid/BaseballBatBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BaseballBatBallXs>`
- `<$BaseballBatBallSm>`
- `<$BaseballBatBallMd>`
- `<$BaseballBatBallLg>`





## BaseballBatBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BaseballBatBall
include('fontawesome/Solid/BaseballBatBall')

' renders the element
BaseballBatBall('BaseballBatBall', 'Baseball Bat Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BaseballBatBall
include('fontawesome/Solid/BaseballBatBall')

' renders the element
BaseballBatBall('BaseballBatBall', 'Baseball Bat Ball', 'an optional tech label', 'an optional description')
@enduml
```


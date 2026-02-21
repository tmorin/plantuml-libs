# BroomBall


```text
fontawesome/Solid/BroomBall
```

```text
include('fontawesome/Solid/BroomBall')
```



| Illustration | BroomBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BroomBall.png) | ![illustration for BroomBall](../../fontawesome/Solid/BroomBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BroomBallXs>`
- `<$BroomBallSm>`
- `<$BroomBallMd>`
- `<$BroomBallLg>`





## BroomBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BroomBall
include('fontawesome/Solid/BroomBall')

' renders the element
BroomBall('BroomBall', 'Broom Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BroomBall
include('fontawesome/Solid/BroomBall')

' renders the element
BroomBall('BroomBall', 'Broom Ball', 'an optional tech label', 'an optional description')
@enduml
```


# QuidditchBroomBall


```text
fontawesome/Solid/QuidditchBroomBall
```

```text
include('fontawesome/Solid/QuidditchBroomBall')
```



| Illustration | QuidditchBroomBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/QuidditchBroomBall.png) | ![illustration for QuidditchBroomBall](../../fontawesome/Solid/QuidditchBroomBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuidditchBroomBallXs>`
- `<$QuidditchBroomBallSm>`
- `<$QuidditchBroomBallMd>`
- `<$QuidditchBroomBallLg>`





## QuidditchBroomBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element QuidditchBroomBall
include('fontawesome/Solid/QuidditchBroomBall')

' renders the element
QuidditchBroomBall('QuidditchBroomBall', 'Quidditch Broom Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element QuidditchBroomBall
include('fontawesome/Solid/QuidditchBroomBall')

' renders the element
QuidditchBroomBall('QuidditchBroomBall', 'Quidditch Broom Ball', 'an optional tech label', 'an optional description')
@enduml
```


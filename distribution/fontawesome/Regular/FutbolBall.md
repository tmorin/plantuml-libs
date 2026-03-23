# FutbolBall


```text
fontawesome/Regular/FutbolBall
```

```text
include('fontawesome/Regular/FutbolBall')
```



| Illustration | FutbolBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FutbolBall.png) | ![illustration for FutbolBall](../../fontawesome/Regular/FutbolBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FutbolBallXs>`
- `<$FutbolBallSm>`
- `<$FutbolBallMd>`
- `<$FutbolBallLg>`





## FutbolBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FutbolBall
include('fontawesome/Regular/FutbolBall')

' renders the element
FutbolBall('FutbolBall', 'Futbol Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FutbolBall
include('fontawesome/Regular/FutbolBall')

' renders the element
FutbolBall('FutbolBall', 'Futbol Ball', 'an optional tech label', 'an optional description')
@enduml
```


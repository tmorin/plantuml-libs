# VolleyballBall


```text
fontawesome/Solid/VolleyballBall
```

```text
include('fontawesome/Solid/VolleyballBall')
```



| Illustration | VolleyballBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VolleyballBall.png) | ![illustration for VolleyballBall](../../fontawesome/Solid/VolleyballBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolleyballBallXs>`
- `<$VolleyballBallSm>`
- `<$VolleyballBallMd>`
- `<$VolleyballBallLg>`





## VolleyballBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolleyballBall
include('fontawesome/Solid/VolleyballBall')

' renders the element
VolleyballBall('VolleyballBall', 'Volleyball Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolleyballBall
include('fontawesome/Solid/VolleyballBall')

' renders the element
VolleyballBall('VolleyballBall', 'Volleyball Ball', 'an optional tech label', 'an optional description')
@enduml
```


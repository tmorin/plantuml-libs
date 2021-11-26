# VolleyballBall


```text
fontawesome-5/Solid/VolleyballBall
```

```text
include('fontawesome-5/Solid/VolleyballBall')
```



| Illustration | VolleyballBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/VolleyballBall.png) | ![illustration for VolleyballBall](../../fontawesome-5/Solid/VolleyballBall.Local.png) |




## VolleyballBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VolleyballBall
include('fontawesome-5/Solid/VolleyballBall')

' renders the element
VolleyballBall('VolleyballBall', 'Volleyball Ball', 'an optional tech label')
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

' loads the Item which embeds the element VolleyballBall
include('fontawesome-5/Solid/VolleyballBall')

' renders the element
VolleyballBall('VolleyballBall', 'Volleyball Ball', 'an optional tech label')
@enduml
```


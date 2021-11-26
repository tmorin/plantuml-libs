# VrCardboard


```text
fontawesome-5/Solid/VrCardboard
```

```text
include('fontawesome-5/Solid/VrCardboard')
```



| Illustration | VrCardboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/VrCardboard.png) | ![illustration for VrCardboard](../../fontawesome-5/Solid/VrCardboard.Local.png) |




## VrCardboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VrCardboard
include('fontawesome-5/Solid/VrCardboard')

' renders the element
VrCardboard('VrCardboard', 'Vr Cardboard', 'an optional tech label')
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

' loads the Item which embeds the element VrCardboard
include('fontawesome-5/Solid/VrCardboard')

' renders the element
VrCardboard('VrCardboard', 'Vr Cardboard', 'an optional tech label')
@enduml
```


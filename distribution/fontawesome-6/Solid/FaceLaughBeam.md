# FaceLaughBeam


```text
fontawesome-6/Solid/FaceLaughBeam
```

```text
include('fontawesome-6/Solid/FaceLaughBeam')
```



| Illustration | FaceLaughBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceLaughBeam.png) | ![illustration for FaceLaughBeam](../../fontawesome-6/Solid/FaceLaughBeam.Local.png) |




## FaceLaughBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceLaughBeam
include('fontawesome-6/Solid/FaceLaughBeam')

' renders the element
FaceLaughBeam('FaceLaughBeam', 'Face Laugh Beam', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceLaughBeam
include('fontawesome-6/Solid/FaceLaughBeam')

' renders the element
FaceLaughBeam('FaceLaughBeam', 'Face Laugh Beam', 'an optional tech label')
@enduml
```


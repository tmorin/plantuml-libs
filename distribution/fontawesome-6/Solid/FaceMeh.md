# FaceMeh


```text
fontawesome-6/Solid/FaceMeh
```

```text
include('fontawesome-6/Solid/FaceMeh')
```



| Illustration | FaceMeh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FaceMeh.png) | ![illustration for FaceMeh](../../fontawesome-6/Solid/FaceMeh.Local.png) |




## FaceMeh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceMeh
include('fontawesome-6/Solid/FaceMeh')

' renders the element
FaceMeh('FaceMeh', 'Face Meh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceMeh
include('fontawesome-6/Solid/FaceMeh')

' renders the element
FaceMeh('FaceMeh', 'Face Meh', 'an optional tech label', 'an optional description')
@enduml
```


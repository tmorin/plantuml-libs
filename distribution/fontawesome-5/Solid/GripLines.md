# GripLines


```text
fontawesome-5/Solid/GripLines
```

```text
include('fontawesome-5/Solid/GripLines')
```



| Illustration | GripLines |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GripLines.png) | ![illustration for GripLines](../../fontawesome-5/Solid/GripLines.Local.png) |




## GripLines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GripLines
include('fontawesome-5/Solid/GripLines')

' renders the element
GripLines('GripLines', 'Grip Lines', 'an optional tech label')
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

' loads the Item which embeds the element GripLines
include('fontawesome-5/Solid/GripLines')

' renders the element
GripLines('GripLines', 'Grip Lines', 'an optional tech label')
@enduml
```


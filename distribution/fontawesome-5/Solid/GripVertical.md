# GripVertical


```text
fontawesome-5/Solid/GripVertical
```

```text
include('fontawesome-5/Solid/GripVertical')
```



| Illustration | GripVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GripVertical.png) | ![illustration for GripVertical](../../fontawesome-5/Solid/GripVertical.Local.png) |




## GripVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GripVertical
include('fontawesome-5/Solid/GripVertical')

' renders the element
GripVertical('GripVertical', 'Grip Vertical', 'an optional tech label')
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

' loads the Item which embeds the element GripVertical
include('fontawesome-5/Solid/GripVertical')

' renders the element
GripVertical('GripVertical', 'Grip Vertical', 'an optional tech label')
@enduml
```


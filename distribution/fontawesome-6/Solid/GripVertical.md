# GripVertical


```text
fontawesome-6/Solid/GripVertical
```

```text
include('fontawesome-6/Solid/GripVertical')
```



| Illustration | GripVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/GripVertical.png) | ![illustration for GripVertical](../../fontawesome-6/Solid/GripVertical.Local.png) |




## GripVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GripVertical
include('fontawesome-6/Solid/GripVertical')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GripVertical
include('fontawesome-6/Solid/GripVertical')

' renders the element
GripVertical('GripVertical', 'Grip Vertical', 'an optional tech label')
@enduml
```


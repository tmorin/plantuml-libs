# GripLinesVertical


```text
fontawesome-5/Solid/GripLinesVertical
```

```text
include('fontawesome-5/Solid/GripLinesVertical')
```



| Illustration | GripLinesVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GripLinesVertical.png) | ![illustration for GripLinesVertical](../../fontawesome-5/Solid/GripLinesVertical.Local.png) |




## GripLinesVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GripLinesVertical
include('fontawesome-5/Solid/GripLinesVertical')

' renders the element
GripLinesVertical('GripLinesVertical', 'Grip Lines Vertical', 'an optional tech label')
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

' loads the Item which embeds the element GripLinesVertical
include('fontawesome-5/Solid/GripLinesVertical')

' renders the element
GripLinesVertical('GripLinesVertical', 'Grip Lines Vertical', 'an optional tech label')
@enduml
```


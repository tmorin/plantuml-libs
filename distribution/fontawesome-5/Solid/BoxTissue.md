# BoxTissue


```text
fontawesome-5/Solid/BoxTissue
```

```text
include('fontawesome-5/Solid/BoxTissue')
```



| Illustration | BoxTissue |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BoxTissue.png) | ![illustration for BoxTissue](../../fontawesome-5/Solid/BoxTissue.Local.png) |




## BoxTissue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BoxTissue
include('fontawesome-5/Solid/BoxTissue')

' renders the element
BoxTissue('BoxTissue', 'Box Tissue', 'an optional tech label')
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

' loads the Item which embeds the element BoxTissue
include('fontawesome-5/Solid/BoxTissue')

' renders the element
BoxTissue('BoxTissue', 'Box Tissue', 'an optional tech label')
@enduml
```


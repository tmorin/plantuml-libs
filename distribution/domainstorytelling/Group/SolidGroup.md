# SolidGroup


```text
domainstorytelling/Group/SolidGroup
```

```text
include('domainstorytelling/Group/SolidGroup')
```



| SolidGroup |
| :---: |
| ![illustration for SolidGroup](../../domainstorytelling/Group/SolidGroup.Local.png) |







## SolidGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element SolidGroup
include('domainstorytelling/Group/SolidGroup')

SolidGroup('SolidGroup', 'Solid Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
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
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element SolidGroup
include('domainstorytelling/Group/SolidGroup')

SolidGroup('SolidGroup', 'Solid Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


# SolidAurora12Group


```text
domainstorytelling/Group/SolidAurora12Group
```

```text
include('domainstorytelling/Group/SolidAurora12Group')
```



| SolidAurora12Group |
| :---: |
| ![illustration for SolidAurora12Group](../../domainstorytelling/Group/SolidAurora12Group.Local.png) |




## SolidAurora12Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element SolidAurora12Group
include('domainstorytelling/Group/SolidAurora12Group')

SolidAurora12Group('SolidAurora12Group', 'Solid Aurora12 Group', 'an optional tech label') {
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

' loads the Item which embeds the element SolidAurora12Group
include('domainstorytelling/Group/SolidAurora12Group')

SolidAurora12Group('SolidAurora12Group', 'Solid Aurora12 Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


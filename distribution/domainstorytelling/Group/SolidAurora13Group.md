# SolidAurora13Group


```text
domainstorytelling/Group/SolidAurora13Group
```

```text
include('domainstorytelling/Group/SolidAurora13Group')
```



| SolidAurora13Group |
| :---: |
| ![illustration for SolidAurora13Group](../../domainstorytelling/Group/SolidAurora13Group.Local.png) |




## SolidAurora13Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element SolidAurora13Group
include('domainstorytelling/Group/SolidAurora13Group')

SolidAurora13Group('SolidAurora13Group', 'Solid Aurora13 Group', 'an optional tech label') {
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

' loads the Item which embeds the element SolidAurora13Group
include('domainstorytelling/Group/SolidAurora13Group')

SolidAurora13Group('SolidAurora13Group', 'Solid Aurora13 Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


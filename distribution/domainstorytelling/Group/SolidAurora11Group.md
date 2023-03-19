# SolidAurora11Group


```text
domainstorytelling/Group/SolidAurora11Group
```

```text
include('domainstorytelling/Group/SolidAurora11Group')
```



| SolidAurora11Group |
| :---: |
| ![illustration for SolidAurora11Group](../../domainstorytelling/Group/SolidAurora11Group.Local.png) |







## SolidAurora11Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element SolidAurora11Group
include('domainstorytelling/Group/SolidAurora11Group')

SolidAurora11Group('SolidAurora11Group', 'Solid Aurora11 Group', 'an optional tech label') {
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

' loads the Item which embeds the element SolidAurora11Group
include('domainstorytelling/Group/SolidAurora11Group')

SolidAurora11Group('SolidAurora11Group', 'Solid Aurora11 Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


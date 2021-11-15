# SolidAurora14Group


```text
domainstorytelling/Group/SolidAurora14Group
```

```text
include('domainstorytelling/Group/SolidAurora14Group')
```



| SolidAurora14Group |
| :---: |
| ![illustration for SolidAurora14Group](../../domainstorytelling/Group/SolidAurora14Group.Local.png) |




## SolidAurora14Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element SolidAurora14Group
include('domainstorytelling/Group/SolidAurora14Group')

SolidAurora14Group('SolidAurora14Group', 'Solid Aurora14 Group', 'an optional tech label') {
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

' loads the Item which embeds the element SolidAurora14Group
include('domainstorytelling/Group/SolidAurora14Group')

SolidAurora14Group('SolidAurora14Group', 'Solid Aurora14 Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


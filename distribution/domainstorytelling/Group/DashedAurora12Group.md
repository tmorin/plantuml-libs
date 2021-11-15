# DashedAurora12Group


```text
domainstorytelling/Group/DashedAurora12Group
```

```text
include('domainstorytelling/Group/DashedAurora12Group')
```



| DashedAurora12Group |
| :---: |
| ![illustration for DashedAurora12Group](../../domainstorytelling/Group/DashedAurora12Group.Local.png) |




## DashedAurora12Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element DashedAurora12Group
include('domainstorytelling/Group/DashedAurora12Group')

DashedAurora12Group('DashedAurora12Group', 'Dashed Aurora12 Group', 'an optional tech label') {
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

' loads the Item which embeds the element DashedAurora12Group
include('domainstorytelling/Group/DashedAurora12Group')

DashedAurora12Group('DashedAurora12Group', 'Dashed Aurora12 Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


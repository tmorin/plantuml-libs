# DashedAurora15Group


```text
domainstorytelling/Group/DashedAurora15Group
```

```text
include('domainstorytelling/Group/DashedAurora15Group')
```



| DashedAurora15Group |
| :---: |
| ![illustration for DashedAurora15Group](../../domainstorytelling/Group/DashedAurora15Group.Local.png) |







## DashedAurora15Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element DashedAurora15Group
include('domainstorytelling/Group/DashedAurora15Group')

DashedAurora15Group('DashedAurora15Group', 'Dashed Aurora15 Group', 'an optional tech label') {
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

' loads the Item which embeds the element DashedAurora15Group
include('domainstorytelling/Group/DashedAurora15Group')

DashedAurora15Group('DashedAurora15Group', 'Dashed Aurora15 Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


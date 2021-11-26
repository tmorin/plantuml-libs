# DottedAurora11Group


```text
domainstorytelling/Group/DottedAurora11Group
```

```text
include('domainstorytelling/Group/DottedAurora11Group')
```



| DottedAurora11Group |
| :---: |
| ![illustration for DottedAurora11Group](../../domainstorytelling/Group/DottedAurora11Group.Local.png) |




## DottedAurora11Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element DottedAurora11Group
include('domainstorytelling/Group/DottedAurora11Group')

DottedAurora11Group('DottedAurora11Group', 'Dotted Aurora11 Group', 'an optional tech label') {
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

' loads the Item which embeds the element DottedAurora11Group
include('domainstorytelling/Group/DottedAurora11Group')

DottedAurora11Group('DottedAurora11Group', 'Dotted Aurora11 Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


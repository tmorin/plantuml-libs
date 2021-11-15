# DottedAurora14Group


```text
domainstorytelling/Group/DottedAurora14Group
```

```text
include('domainstorytelling/Group/DottedAurora14Group')
```



| DottedAurora14Group |
| :---: |
| ![illustration for DottedAurora14Group](../../domainstorytelling/Group/DottedAurora14Group.Local.png) |




## DottedAurora14Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element DottedAurora14Group
include('domainstorytelling/Group/DottedAurora14Group')

DottedAurora14Group('DottedAurora14Group', 'Dotted Aurora14 Group', 'an optional tech label') {
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

' loads the Item which embeds the element DottedAurora14Group
include('domainstorytelling/Group/DottedAurora14Group')

DottedAurora14Group('DottedAurora14Group', 'Dotted Aurora14 Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


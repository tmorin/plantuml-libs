# DottedGroup


```text
domainstorytelling/Group/DottedGroup
```

```text
include('domainstorytelling/Group/DottedGroup')
```



| DottedGroup |
| :---: |
| ![illustration for DottedGroup](../../domainstorytelling/Group/DottedGroup.Local.png) |




## DottedGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element DottedGroup
include('domainstorytelling/Group/DottedGroup')

DottedGroup('DottedGroup', 'Dotted Group', 'an optional tech label') {
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

' loads the Item which embeds the element DottedGroup
include('domainstorytelling/Group/DottedGroup')

DottedGroup('DottedGroup', 'Dotted Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


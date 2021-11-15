# SolidFrost10Group


```text
domainstorytelling/Group/SolidFrost10Group
```

```text
include('domainstorytelling/Group/SolidFrost10Group')
```



| SolidFrost10Group |
| :---: |
| ![illustration for SolidFrost10Group](../../domainstorytelling/Group/SolidFrost10Group.Local.png) |




## SolidFrost10Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element SolidFrost10Group
include('domainstorytelling/Group/SolidFrost10Group')

SolidFrost10Group('SolidFrost10Group', 'Solid Frost10 Group', 'an optional tech label') {
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

' loads the Item which embeds the element SolidFrost10Group
include('domainstorytelling/Group/SolidFrost10Group')

SolidFrost10Group('SolidFrost10Group', 'Solid Frost10 Group', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```


# BuildingColumns


```text
fontawesome-6/Solid/BuildingColumns
```

```text
include('fontawesome-6/Solid/BuildingColumns')
```



| Illustration | BuildingColumns |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BuildingColumns.png) | ![illustration for BuildingColumns](../../fontawesome-6/Solid/BuildingColumns.Local.png) |




## BuildingColumns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BuildingColumns
include('fontawesome-6/Solid/BuildingColumns')

' renders the element
BuildingColumns('BuildingColumns', 'Building Columns', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BuildingColumns
include('fontawesome-6/Solid/BuildingColumns')

' renders the element
BuildingColumns('BuildingColumns', 'Building Columns', 'an optional tech label')
@enduml
```


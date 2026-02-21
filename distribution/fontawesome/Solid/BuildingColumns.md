# BuildingColumns


```text
fontawesome/Solid/BuildingColumns
```

```text
include('fontawesome/Solid/BuildingColumns')
```



| Illustration | BuildingColumns |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BuildingColumns.png) | ![illustration for BuildingColumns](../../fontawesome/Solid/BuildingColumns.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuildingColumnsXs>`
- `<$BuildingColumnsSm>`
- `<$BuildingColumnsMd>`
- `<$BuildingColumnsLg>`





## BuildingColumns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuildingColumns
include('fontawesome/Solid/BuildingColumns')

' renders the element
BuildingColumns('BuildingColumns', 'Building Columns', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuildingColumns
include('fontawesome/Solid/BuildingColumns')

' renders the element
BuildingColumns('BuildingColumns', 'Building Columns', 'an optional tech label', 'an optional description')
@enduml
```


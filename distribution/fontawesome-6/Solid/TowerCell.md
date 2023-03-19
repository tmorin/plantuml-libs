# TowerCell


```text
fontawesome-6/Solid/TowerCell
```

```text
include('fontawesome-6/Solid/TowerCell')
```



| Illustration | TowerCell |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TowerCell.png) | ![illustration for TowerCell](../../fontawesome-6/Solid/TowerCell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TowerCellXs>`
- `<$TowerCellSm>`
- `<$TowerCellMd>`
- `<$TowerCellLg>`





## TowerCell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TowerCell
include('fontawesome-6/Solid/TowerCell')

' renders the element
TowerCell('TowerCell', 'Tower Cell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TowerCell
include('fontawesome-6/Solid/TowerCell')

' renders the element
TowerCell('TowerCell', 'Tower Cell', 'an optional tech label', 'an optional description')
@enduml
```


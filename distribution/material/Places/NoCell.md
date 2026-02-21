# NoCell


```text
material/Places/NoCell
```

```text
include('material/Places/NoCell')
```



| Illustration | NoCell |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/NoCell.png) | ![illustration for NoCell](../../material/Places/NoCell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoCellXs>`
- `<$NoCellSm>`
- `<$NoCellMd>`
- `<$NoCellLg>`





## NoCell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NoCell
include('material/Places/NoCell')

' renders the element
NoCell('NoCell', 'No Cell', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element NoCell
include('material/Places/NoCell')

' renders the element
NoCell('NoCell', 'No Cell', 'an optional tech label', 'an optional description')
@enduml
```


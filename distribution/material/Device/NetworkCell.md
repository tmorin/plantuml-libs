# NetworkCell


```text
material/Device/NetworkCell
```

```text
include('material/Device/NetworkCell')
```



| Illustration | NetworkCell |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/NetworkCell.png) | ![illustration for NetworkCell](../../material/Device/NetworkCell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NetworkCellXs>`
- `<$NetworkCellSm>`
- `<$NetworkCellMd>`
- `<$NetworkCellLg>`





## NetworkCell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NetworkCell
include('material/Device/NetworkCell')

' renders the element
NetworkCell('NetworkCell', 'Network Cell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NetworkCell
include('material/Device/NetworkCell')

' renders the element
NetworkCell('NetworkCell', 'Network Cell', 'an optional tech label', 'an optional description')
@enduml
```


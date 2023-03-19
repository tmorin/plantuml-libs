# ViewQuilt


```text
material-4/Action/ViewQuilt
```

```text
include('material-4/Action/ViewQuilt')
```



| Illustration | ViewQuilt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ViewQuilt.png) | ![illustration for ViewQuilt](../../material-4/Action/ViewQuilt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViewQuiltXs>`
- `<$ViewQuiltSm>`
- `<$ViewQuiltMd>`
- `<$ViewQuiltLg>`





## ViewQuilt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewQuilt
include('material-4/Action/ViewQuilt')

' renders the element
ViewQuilt('ViewQuilt', 'View Quilt', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element ViewQuilt
include('material-4/Action/ViewQuilt')

' renders the element
ViewQuilt('ViewQuilt', 'View Quilt', 'an optional tech label', 'an optional description')
@enduml
```


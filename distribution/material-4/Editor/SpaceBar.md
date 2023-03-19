# SpaceBar


```text
material-4/Editor/SpaceBar
```

```text
include('material-4/Editor/SpaceBar')
```



| Illustration | SpaceBar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/SpaceBar.png) | ![illustration for SpaceBar](../../material-4/Editor/SpaceBar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpaceBarXs>`
- `<$SpaceBarSm>`
- `<$SpaceBarMd>`
- `<$SpaceBarLg>`





## SpaceBar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SpaceBar
include('material-4/Editor/SpaceBar')

' renders the element
SpaceBar('SpaceBar', 'Space Bar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SpaceBar
include('material-4/Editor/SpaceBar')

' renders the element
SpaceBar('SpaceBar', 'Space Bar', 'an optional tech label', 'an optional description')
@enduml
```


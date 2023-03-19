# Badge


```text
material-4/Maps/Badge
```

```text
include('material-4/Maps/Badge')
```



| Illustration | Badge |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Badge.png) | ![illustration for Badge](../../material-4/Maps/Badge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BadgeXs>`
- `<$BadgeSm>`
- `<$BadgeMd>`
- `<$BadgeLg>`





## Badge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Badge
include('material-4/Maps/Badge')

' renders the element
Badge('Badge', 'Badge', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Badge
include('material-4/Maps/Badge')

' renders the element
Badge('Badge', 'Badge', 'an optional tech label', 'an optional description')
@enduml
```


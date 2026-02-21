# ViewCompact


```text
material/Image/ViewCompact
```

```text
include('material/Image/ViewCompact')
```



| Illustration | ViewCompact |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/ViewCompact.png) | ![illustration for ViewCompact](../../material/Image/ViewCompact.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViewCompactXs>`
- `<$ViewCompactSm>`
- `<$ViewCompactMd>`
- `<$ViewCompactLg>`





## ViewCompact

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ViewCompact
include('material/Image/ViewCompact')

' renders the element
ViewCompact('ViewCompact', 'View Compact', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViewCompact
include('material/Image/ViewCompact')

' renders the element
ViewCompact('ViewCompact', 'View Compact', 'an optional tech label', 'an optional description')
@enduml
```


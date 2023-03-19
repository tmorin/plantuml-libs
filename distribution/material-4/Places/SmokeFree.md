# SmokeFree


```text
material-4/Places/SmokeFree
```

```text
include('material-4/Places/SmokeFree')
```



| Illustration | SmokeFree |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/SmokeFree.png) | ![illustration for SmokeFree](../../material-4/Places/SmokeFree.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmokeFreeXs>`
- `<$SmokeFreeSm>`
- `<$SmokeFreeMd>`
- `<$SmokeFreeLg>`





## SmokeFree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SmokeFree
include('material-4/Places/SmokeFree')

' renders the element
SmokeFree('SmokeFree', 'Smoke Free', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SmokeFree
include('material-4/Places/SmokeFree')

' renders the element
SmokeFree('SmokeFree', 'Smoke Free', 'an optional tech label', 'an optional description')
@enduml
```


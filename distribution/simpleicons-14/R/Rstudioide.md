# Rstudioide


```text
simpleicons-14/R/Rstudioide
```

```text
include('simpleicons-14/R/Rstudioide')
```



| Illustration | Rstudioide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rstudioide.png) | ![illustration for Rstudioide](../../simpleicons-14/R/Rstudioide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RstudioideXs>`
- `<$RstudioideSm>`
- `<$RstudioideMd>`
- `<$RstudioideLg>`





## Rstudioide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rstudioide
include('simpleicons-14/R/Rstudioide')

' renders the element
Rstudioide('Rstudioide', 'Rstudioide', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rstudioide
include('simpleicons-14/R/Rstudioide')

' renders the element
Rstudioide('Rstudioide', 'Rstudioide', 'an optional tech label', 'an optional description')
@enduml
```


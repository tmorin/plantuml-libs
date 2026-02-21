# Vega


```text
simpleicons-14/V/Vega
```

```text
include('simpleicons-14/V/Vega')
```



| Illustration | Vega |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vega.png) | ![illustration for Vega](../../simpleicons-14/V/Vega.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VegaXs>`
- `<$VegaSm>`
- `<$VegaMd>`
- `<$VegaLg>`





## Vega

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vega
include('simpleicons-14/V/Vega')

' renders the element
Vega('Vega', 'Vega', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vega
include('simpleicons-14/V/Vega')

' renders the element
Vega('Vega', 'Vega', 'an optional tech label', 'an optional description')
@enduml
```


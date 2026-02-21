# Vega


```text
simpleicons/V/Vega
```

```text
include('simpleicons/V/Vega')
```



| Illustration | Vega |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vega.png) | ![illustration for Vega](../../simpleicons/V/Vega.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vega
include('simpleicons/V/Vega')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vega
include('simpleicons/V/Vega')

' renders the element
Vega('Vega', 'Vega', 'an optional tech label', 'an optional description')
@enduml
```


# Kasasmart


```text
simpleicons/K/Kasasmart
```

```text
include('simpleicons/K/Kasasmart')
```



| Illustration | Kasasmart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kasasmart.png) | ![illustration for Kasasmart](../../simpleicons/K/Kasasmart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KasasmartXs>`
- `<$KasasmartSm>`
- `<$KasasmartMd>`
- `<$KasasmartLg>`





## Kasasmart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kasasmart
include('simpleicons/K/Kasasmart')

' renders the element
Kasasmart('Kasasmart', 'Kasasmart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kasasmart
include('simpleicons/K/Kasasmart')

' renders the element
Kasasmart('Kasasmart', 'Kasasmart', 'an optional tech label', 'an optional description')
@enduml
```


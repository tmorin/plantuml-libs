# Tasmota


```text
simpleicons/T/Tasmota
```

```text
include('simpleicons/T/Tasmota')
```



| Illustration | Tasmota |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tasmota.png) | ![illustration for Tasmota](../../simpleicons/T/Tasmota.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TasmotaXs>`
- `<$TasmotaSm>`
- `<$TasmotaMd>`
- `<$TasmotaLg>`





## Tasmota

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tasmota
include('simpleicons/T/Tasmota')

' renders the element
Tasmota('Tasmota', 'Tasmota', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tasmota
include('simpleicons/T/Tasmota')

' renders the element
Tasmota('Tasmota', 'Tasmota', 'an optional tech label', 'an optional description')
@enduml
```


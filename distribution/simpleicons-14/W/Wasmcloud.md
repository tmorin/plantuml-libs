# Wasmcloud


```text
simpleicons-14/W/Wasmcloud
```

```text
include('simpleicons-14/W/Wasmcloud')
```



| Illustration | Wasmcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wasmcloud.png) | ![illustration for Wasmcloud](../../simpleicons-14/W/Wasmcloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WasmcloudXs>`
- `<$WasmcloudSm>`
- `<$WasmcloudMd>`
- `<$WasmcloudLg>`





## Wasmcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wasmcloud
include('simpleicons-14/W/Wasmcloud')

' renders the element
Wasmcloud('Wasmcloud', 'Wasmcloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wasmcloud
include('simpleicons-14/W/Wasmcloud')

' renders the element
Wasmcloud('Wasmcloud', 'Wasmcloud', 'an optional tech label', 'an optional description')
@enduml
```


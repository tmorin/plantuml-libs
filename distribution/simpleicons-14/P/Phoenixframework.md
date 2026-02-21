# Phoenixframework


```text
simpleicons-14/P/Phoenixframework
```

```text
include('simpleicons-14/P/Phoenixframework')
```



| Illustration | Phoenixframework |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Phoenixframework.png) | ![illustration for Phoenixframework](../../simpleicons-14/P/Phoenixframework.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoenixframeworkXs>`
- `<$PhoenixframeworkSm>`
- `<$PhoenixframeworkMd>`
- `<$PhoenixframeworkLg>`





## Phoenixframework

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Phoenixframework
include('simpleicons-14/P/Phoenixframework')

' renders the element
Phoenixframework('Phoenixframework', 'Phoenixframework', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Phoenixframework
include('simpleicons-14/P/Phoenixframework')

' renders the element
Phoenixframework('Phoenixframework', 'Phoenixframework', 'an optional tech label', 'an optional description')
@enduml
```


# Quasar


```text
simpleicons-14/Q/Quasar
```

```text
include('simpleicons-14/Q/Quasar')
```



| Illustration | Quasar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Quasar.png) | ![illustration for Quasar](../../simpleicons-14/Q/Quasar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuasarXs>`
- `<$QuasarSm>`
- `<$QuasarMd>`
- `<$QuasarLg>`





## Quasar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Quasar
include('simpleicons-14/Q/Quasar')

' renders the element
Quasar('Quasar', 'Quasar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quasar
include('simpleicons-14/Q/Quasar')

' renders the element
Quasar('Quasar', 'Quasar', 'an optional tech label', 'an optional description')
@enduml
```


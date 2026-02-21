# Quasar


```text
simpleicons/Q/Quasar
```

```text
include('simpleicons/Q/Quasar')
```



| Illustration | Quasar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Quasar.png) | ![illustration for Quasar](../../simpleicons/Q/Quasar.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Quasar
include('simpleicons/Q/Quasar')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Quasar
include('simpleicons/Q/Quasar')

' renders the element
Quasar('Quasar', 'Quasar', 'an optional tech label', 'an optional description')
@enduml
```


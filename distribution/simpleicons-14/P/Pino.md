# Pino


```text
simpleicons-14/P/Pino
```

```text
include('simpleicons-14/P/Pino')
```



| Illustration | Pino |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pino.png) | ![illustration for Pino](../../simpleicons-14/P/Pino.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PinoXs>`
- `<$PinoSm>`
- `<$PinoMd>`
- `<$PinoLg>`





## Pino

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pino
include('simpleicons-14/P/Pino')

' renders the element
Pino('Pino', 'Pino', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pino
include('simpleicons-14/P/Pino')

' renders the element
Pino('Pino', 'Pino', 'an optional tech label', 'an optional description')
@enduml
```


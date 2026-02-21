# Pino


```text
simpleicons/P/Pino
```

```text
include('simpleicons/P/Pino')
```



| Illustration | Pino |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pino.png) | ![illustration for Pino](../../simpleicons/P/Pino.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pino
include('simpleicons/P/Pino')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pino
include('simpleicons/P/Pino')

' renders the element
Pino('Pino', 'Pino', 'an optional tech label', 'an optional description')
@enduml
```


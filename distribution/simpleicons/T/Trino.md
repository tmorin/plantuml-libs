# Trino


```text
simpleicons/T/Trino
```

```text
include('simpleicons/T/Trino')
```



| Illustration | Trino |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Trino.png) | ![illustration for Trino](../../simpleicons/T/Trino.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrinoXs>`
- `<$TrinoSm>`
- `<$TrinoMd>`
- `<$TrinoLg>`





## Trino

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trino
include('simpleicons/T/Trino')

' renders the element
Trino('Trino', 'Trino', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trino
include('simpleicons/T/Trino')

' renders the element
Trino('Trino', 'Trino', 'an optional tech label', 'an optional description')
@enduml
```


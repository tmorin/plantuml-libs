# Migadu


```text
simpleicons/M/Migadu
```

```text
include('simpleicons/M/Migadu')
```



| Illustration | Migadu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Migadu.png) | ![illustration for Migadu](../../simpleicons/M/Migadu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MigaduXs>`
- `<$MigaduSm>`
- `<$MigaduMd>`
- `<$MigaduLg>`





## Migadu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Migadu
include('simpleicons/M/Migadu')

' renders the element
Migadu('Migadu', 'Migadu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Migadu
include('simpleicons/M/Migadu')

' renders the element
Migadu('Migadu', 'Migadu', 'an optional tech label', 'an optional description')
@enduml
```


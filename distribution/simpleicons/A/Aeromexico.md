# Aeromexico


```text
simpleicons/A/Aeromexico
```

```text
include('simpleicons/A/Aeromexico')
```



| Illustration | Aeromexico |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Aeromexico.png) | ![illustration for Aeromexico](../../simpleicons/A/Aeromexico.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AeromexicoXs>`
- `<$AeromexicoSm>`
- `<$AeromexicoMd>`
- `<$AeromexicoLg>`





## Aeromexico

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Aeromexico
include('simpleicons/A/Aeromexico')

' renders the element
Aeromexico('Aeromexico', 'Aeromexico', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aeromexico
include('simpleicons/A/Aeromexico')

' renders the element
Aeromexico('Aeromexico', 'Aeromexico', 'an optional tech label', 'an optional description')
@enduml
```


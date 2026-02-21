# Nebula


```text
simpleicons/N/Nebula
```

```text
include('simpleicons/N/Nebula')
```



| Illustration | Nebula |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nebula.png) | ![illustration for Nebula](../../simpleicons/N/Nebula.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NebulaXs>`
- `<$NebulaSm>`
- `<$NebulaMd>`
- `<$NebulaLg>`





## Nebula

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nebula
include('simpleicons/N/Nebula')

' renders the element
Nebula('Nebula', 'Nebula', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nebula
include('simpleicons/N/Nebula')

' renders the element
Nebula('Nebula', 'Nebula', 'an optional tech label', 'an optional description')
@enduml
```


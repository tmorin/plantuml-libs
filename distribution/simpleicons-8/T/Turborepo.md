# Turborepo


```text
simpleicons-8/T/Turborepo
```

```text
include('simpleicons-8/T/Turborepo')
```



| Illustration | Turborepo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Turborepo.png) | ![illustration for Turborepo](../../simpleicons-8/T/Turborepo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TurborepoXs>`
- `<$TurborepoSm>`
- `<$TurborepoMd>`
- `<$TurborepoLg>`





## Turborepo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Turborepo
include('simpleicons-8/T/Turborepo')

' renders the element
Turborepo('Turborepo', 'Turborepo', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Turborepo
include('simpleicons-8/T/Turborepo')

' renders the element
Turborepo('Turborepo', 'Turborepo', 'an optional tech label', 'an optional description')
@enduml
```


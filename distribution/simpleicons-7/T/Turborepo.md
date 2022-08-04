# Turborepo


```text
simpleicons-7/T/Turborepo
```

```text
include('simpleicons-7/T/Turborepo')
```



| Illustration | Turborepo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Turborepo.png) | ![illustration for Turborepo](../../simpleicons-7/T/Turborepo.Local.png) |




## Turborepo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Turborepo
include('simpleicons-7/T/Turborepo')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Turborepo
include('simpleicons-7/T/Turborepo')

' renders the element
Turborepo('Turborepo', 'Turborepo', 'an optional tech label', 'an optional description')
@enduml
```


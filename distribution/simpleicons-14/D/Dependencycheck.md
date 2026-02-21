# Dependencycheck


```text
simpleicons-14/D/Dependencycheck
```

```text
include('simpleicons-14/D/Dependencycheck')
```



| Illustration | Dependencycheck |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dependencycheck.png) | ![illustration for Dependencycheck](../../simpleicons-14/D/Dependencycheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DependencycheckXs>`
- `<$DependencycheckSm>`
- `<$DependencycheckMd>`
- `<$DependencycheckLg>`





## Dependencycheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dependencycheck
include('simpleicons-14/D/Dependencycheck')

' renders the element
Dependencycheck('Dependencycheck', 'Dependencycheck', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dependencycheck
include('simpleicons-14/D/Dependencycheck')

' renders the element
Dependencycheck('Dependencycheck', 'Dependencycheck', 'an optional tech label', 'an optional description')
@enduml
```


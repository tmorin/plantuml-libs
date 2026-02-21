# Dependencycheck


```text
simpleicons/D/Dependencycheck
```

```text
include('simpleicons/D/Dependencycheck')
```



| Illustration | Dependencycheck |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dependencycheck.png) | ![illustration for Dependencycheck](../../simpleicons/D/Dependencycheck.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dependencycheck
include('simpleicons/D/Dependencycheck')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dependencycheck
include('simpleicons/D/Dependencycheck')

' renders the element
Dependencycheck('Dependencycheck', 'Dependencycheck', 'an optional tech label', 'an optional description')
@enduml
```


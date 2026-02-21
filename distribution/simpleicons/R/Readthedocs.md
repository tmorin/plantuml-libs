# Readthedocs


```text
simpleicons/R/Readthedocs
```

```text
include('simpleicons/R/Readthedocs')
```



| Illustration | Readthedocs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Readthedocs.png) | ![illustration for Readthedocs](../../simpleicons/R/Readthedocs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReadthedocsXs>`
- `<$ReadthedocsSm>`
- `<$ReadthedocsMd>`
- `<$ReadthedocsLg>`





## Readthedocs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Readthedocs
include('simpleicons/R/Readthedocs')

' renders the element
Readthedocs('Readthedocs', 'Readthedocs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Readthedocs
include('simpleicons/R/Readthedocs')

' renders the element
Readthedocs('Readthedocs', 'Readthedocs', 'an optional tech label', 'an optional description')
@enduml
```


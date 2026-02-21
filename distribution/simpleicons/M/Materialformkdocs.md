# Materialformkdocs


```text
simpleicons/M/Materialformkdocs
```

```text
include('simpleicons/M/Materialformkdocs')
```



| Illustration | Materialformkdocs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Materialformkdocs.png) | ![illustration for Materialformkdocs](../../simpleicons/M/Materialformkdocs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaterialformkdocsXs>`
- `<$MaterialformkdocsSm>`
- `<$MaterialformkdocsMd>`
- `<$MaterialformkdocsLg>`





## Materialformkdocs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Materialformkdocs
include('simpleicons/M/Materialformkdocs')

' renders the element
Materialformkdocs('Materialformkdocs', 'Materialformkdocs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Materialformkdocs
include('simpleicons/M/Materialformkdocs')

' renders the element
Materialformkdocs('Materialformkdocs', 'Materialformkdocs', 'an optional tech label', 'an optional description')
@enduml
```


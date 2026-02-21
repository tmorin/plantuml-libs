# Materialformkdocs


```text
simpleicons-14/M/Materialformkdocs
```

```text
include('simpleicons-14/M/Materialformkdocs')
```



| Illustration | Materialformkdocs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Materialformkdocs.png) | ![illustration for Materialformkdocs](../../simpleicons-14/M/Materialformkdocs.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Materialformkdocs
include('simpleicons-14/M/Materialformkdocs')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Materialformkdocs
include('simpleicons-14/M/Materialformkdocs')

' renders the element
Materialformkdocs('Materialformkdocs', 'Materialformkdocs', 'an optional tech label', 'an optional description')
@enduml
```


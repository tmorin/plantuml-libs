# Mdnwebdocs


```text
simpleicons-8/M/Mdnwebdocs
```

```text
include('simpleicons-8/M/Mdnwebdocs')
```



| Illustration | Mdnwebdocs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Mdnwebdocs.png) | ![illustration for Mdnwebdocs](../../simpleicons-8/M/Mdnwebdocs.Local.png) |




## Mdnwebdocs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mdnwebdocs
include('simpleicons-8/M/Mdnwebdocs')

' renders the element
Mdnwebdocs('Mdnwebdocs', 'Mdnwebdocs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mdnwebdocs
include('simpleicons-8/M/Mdnwebdocs')

' renders the element
Mdnwebdocs('Mdnwebdocs', 'Mdnwebdocs', 'an optional tech label', 'an optional description')
@enduml
```


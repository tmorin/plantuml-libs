# Googledocs


```text
simpleicons/G/Googledocs
```

```text
include('simpleicons/G/Googledocs')
```



| Illustration | Googledocs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googledocs.png) | ![illustration for Googledocs](../../simpleicons/G/Googledocs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogledocsXs>`
- `<$GoogledocsSm>`
- `<$GoogledocsMd>`
- `<$GoogledocsLg>`





## Googledocs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googledocs
include('simpleicons/G/Googledocs')

' renders the element
Googledocs('Googledocs', 'Googledocs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googledocs
include('simpleicons/G/Googledocs')

' renders the element
Googledocs('Googledocs', 'Googledocs', 'an optional tech label', 'an optional description')
@enduml
```


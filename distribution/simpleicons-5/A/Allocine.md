# Allocine


```text
simpleicons-5/A/Allocine
```

```text
include('simpleicons-5/A/Allocine')
```



| Illustration | Allocine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Allocine.png) | ![illustration for Allocine](../../simpleicons-5/A/Allocine.Local.png) |




## Allocine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Allocine
include('simpleicons-5/A/Allocine')

' renders the element
Allocine('Allocine', 'Allocine', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Allocine
include('simpleicons-5/A/Allocine')

' renders the element
Allocine('Allocine', 'Allocine', 'an optional tech label')
@enduml
```


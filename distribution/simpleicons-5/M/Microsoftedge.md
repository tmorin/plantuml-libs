# Microsoftedge


```text
simpleicons-5/M/Microsoftedge
```

```text
include('simpleicons-5/M/Microsoftedge')
```



| Illustration | Microsoftedge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Microsoftedge.png) | ![illustration for Microsoftedge](../../simpleicons-5/M/Microsoftedge.Local.png) |




## Microsoftedge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microsoftedge
include('simpleicons-5/M/Microsoftedge')

' renders the element
Microsoftedge('Microsoftedge', 'Microsoftedge', 'an optional tech label')
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

' loads the Item which embeds the element Microsoftedge
include('simpleicons-5/M/Microsoftedge')

' renders the element
Microsoftedge('Microsoftedge', 'Microsoftedge', 'an optional tech label')
@enduml
```


# Mxlinux


```text
simpleicons-5/M/Mxlinux
```

```text
include('simpleicons-5/M/Mxlinux')
```



| Illustration | Mxlinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mxlinux.png) | ![illustration for Mxlinux](../../simpleicons-5/M/Mxlinux.Local.png) |




## Mxlinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mxlinux
include('simpleicons-5/M/Mxlinux')

' renders the element
Mxlinux('Mxlinux', 'Mxlinux', 'an optional tech label')
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

' loads the Item which embeds the element Mxlinux
include('simpleicons-5/M/Mxlinux')

' renders the element
Mxlinux('Mxlinux', 'Mxlinux', 'an optional tech label')
@enduml
```


# Debian


```text
simpleicons-7/D/Debian
```

```text
include('simpleicons-7/D/Debian')
```



| Illustration | Debian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Debian.png) | ![illustration for Debian](../../simpleicons-7/D/Debian.Local.png) |




## Debian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Debian
include('simpleicons-7/D/Debian')

' renders the element
Debian('Debian', 'Debian', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Debian
include('simpleicons-7/D/Debian')

' renders the element
Debian('Debian', 'Debian', 'an optional tech label')
@enduml
```


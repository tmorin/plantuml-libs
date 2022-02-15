# Microdotblog


```text
simpleicons-6/M/Microdotblog
```

```text
include('simpleicons-6/M/Microdotblog')
```



| Illustration | Microdotblog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Microdotblog.png) | ![illustration for Microdotblog](../../simpleicons-6/M/Microdotblog.Local.png) |




## Microdotblog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Microdotblog
include('simpleicons-6/M/Microdotblog')

' renders the element
Microdotblog('Microdotblog', 'Microdotblog', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Microdotblog
include('simpleicons-6/M/Microdotblog')

' renders the element
Microdotblog('Microdotblog', 'Microdotblog', 'an optional tech label')
@enduml
```


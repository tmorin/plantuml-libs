# Microdotblog


```text
simpleicons-8/M/Microdotblog
```

```text
include('simpleicons-8/M/Microdotblog')
```



| Illustration | Microdotblog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Microdotblog.png) | ![illustration for Microdotblog](../../simpleicons-8/M/Microdotblog.Local.png) |




## Microdotblog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Microdotblog
include('simpleicons-8/M/Microdotblog')

' renders the element
Microdotblog('Microdotblog', 'Microdotblog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microdotblog
include('simpleicons-8/M/Microdotblog')

' renders the element
Microdotblog('Microdotblog', 'Microdotblog', 'an optional tech label', 'an optional description')
@enduml
```


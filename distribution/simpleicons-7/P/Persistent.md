# Persistent


```text
simpleicons-7/P/Persistent
```

```text
include('simpleicons-7/P/Persistent')
```



| Illustration | Persistent |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Persistent.png) | ![illustration for Persistent](../../simpleicons-7/P/Persistent.Local.png) |




## Persistent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Persistent
include('simpleicons-7/P/Persistent')

' renders the element
Persistent('Persistent', 'Persistent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Persistent
include('simpleicons-7/P/Persistent')

' renders the element
Persistent('Persistent', 'Persistent', 'an optional tech label', 'an optional description')
@enduml
```


# Manageiq


```text
simpleicons-5/M/Manageiq
```

```text
include('simpleicons-5/M/Manageiq')
```



| Illustration | Manageiq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Manageiq.png) | ![illustration for Manageiq](../../simpleicons-5/M/Manageiq.Local.png) |




## Manageiq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Manageiq
include('simpleicons-5/M/Manageiq')

' renders the element
Manageiq('Manageiq', 'Manageiq', 'an optional tech label')
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

' loads the Item which embeds the element Manageiq
include('simpleicons-5/M/Manageiq')

' renders the element
Manageiq('Manageiq', 'Manageiq', 'an optional tech label')
@enduml
```


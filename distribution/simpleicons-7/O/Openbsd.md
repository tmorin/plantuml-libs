# Openbsd


```text
simpleicons-7/O/Openbsd
```

```text
include('simpleicons-7/O/Openbsd')
```



| Illustration | Openbsd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openbsd.png) | ![illustration for Openbsd](../../simpleicons-7/O/Openbsd.Local.png) |




## Openbsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openbsd
include('simpleicons-7/O/Openbsd')

' renders the element
Openbsd('Openbsd', 'Openbsd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openbsd
include('simpleicons-7/O/Openbsd')

' renders the element
Openbsd('Openbsd', 'Openbsd', 'an optional tech label', 'an optional description')
@enduml
```

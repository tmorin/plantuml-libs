# Openbsd


```text
simpleicons-5/O/Openbsd
```

```text
include('simpleicons-5/O/Openbsd')
```



| Illustration | Openbsd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openbsd.png) | ![illustration for Openbsd](../../simpleicons-5/O/Openbsd.Local.png) |




## Openbsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openbsd
include('simpleicons-5/O/Openbsd')

' renders the element
Openbsd('Openbsd', 'Openbsd', 'an optional tech label')
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

' loads the Item which embeds the element Openbsd
include('simpleicons-5/O/Openbsd')

' renders the element
Openbsd('Openbsd', 'Openbsd', 'an optional tech label')
@enduml
```


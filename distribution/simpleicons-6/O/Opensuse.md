# Opensuse


```text
simpleicons-6/O/Opensuse
```

```text
include('simpleicons-6/O/Opensuse')
```



| Illustration | Opensuse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Opensuse.png) | ![illustration for Opensuse](../../simpleicons-6/O/Opensuse.Local.png) |




## Opensuse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Opensuse
include('simpleicons-6/O/Opensuse')

' renders the element
Opensuse('Opensuse', 'Opensuse', 'an optional tech label')
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

' loads the Item which embeds the element Opensuse
include('simpleicons-6/O/Opensuse')

' renders the element
Opensuse('Opensuse', 'Opensuse', 'an optional tech label')
@enduml
```


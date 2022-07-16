# Openzfs


```text
simpleicons-7/O/Openzfs
```

```text
include('simpleicons-7/O/Openzfs')
```



| Illustration | Openzfs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openzfs.png) | ![illustration for Openzfs](../../simpleicons-7/O/Openzfs.Local.png) |




## Openzfs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openzfs
include('simpleicons-7/O/Openzfs')

' renders the element
Openzfs('Openzfs', 'Openzfs', 'an optional tech label')
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

' loads the Item which embeds the element Openzfs
include('simpleicons-7/O/Openzfs')

' renders the element
Openzfs('Openzfs', 'Openzfs', 'an optional tech label')
@enduml
```


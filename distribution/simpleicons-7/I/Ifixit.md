# Ifixit


```text
simpleicons-7/I/Ifixit
```

```text
include('simpleicons-7/I/Ifixit')
```



| Illustration | Ifixit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Ifixit.png) | ![illustration for Ifixit](../../simpleicons-7/I/Ifixit.Local.png) |




## Ifixit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ifixit
include('simpleicons-7/I/Ifixit')

' renders the element
Ifixit('Ifixit', 'Ifixit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ifixit
include('simpleicons-7/I/Ifixit')

' renders the element
Ifixit('Ifixit', 'Ifixit', 'an optional tech label', 'an optional description')
@enduml
```


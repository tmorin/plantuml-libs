# Opel


```text
simpleicons-5/O/Opel
```

```text
include('simpleicons-5/O/Opel')
```



| Illustration | Opel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Opel.png) | ![illustration for Opel](../../simpleicons-5/O/Opel.Local.png) |




## Opel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Opel
include('simpleicons-5/O/Opel')

' renders the element
Opel('Opel', 'Opel', 'an optional tech label')
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

' loads the Item which embeds the element Opel
include('simpleicons-5/O/Opel')

' renders the element
Opel('Opel', 'Opel', 'an optional tech label')
@enduml
```


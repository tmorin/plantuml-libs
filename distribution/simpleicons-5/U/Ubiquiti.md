# Ubiquiti


```text
simpleicons-5/U/Ubiquiti
```

```text
include('simpleicons-5/U/Ubiquiti')
```



| Illustration | Ubiquiti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Ubiquiti.png) | ![illustration for Ubiquiti](../../simpleicons-5/U/Ubiquiti.Local.png) |




## Ubiquiti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ubiquiti
include('simpleicons-5/U/Ubiquiti')

' renders the element
Ubiquiti('Ubiquiti', 'Ubiquiti', 'an optional tech label')
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

' loads the Item which embeds the element Ubiquiti
include('simpleicons-5/U/Ubiquiti')

' renders the element
Ubiquiti('Ubiquiti', 'Ubiquiti', 'an optional tech label')
@enduml
```


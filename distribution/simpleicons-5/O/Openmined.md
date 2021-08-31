# Openmined


```text
simpleicons-5/O/Openmined
```

```text
include('simpleicons-5/O/Openmined')
```



| Illustration | Openmined |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openmined.png) | ![illustration for Openmined](../../simpleicons-5/O/Openmined.Local.png) |




## Openmined

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openmined
include('simpleicons-5/O/Openmined')

' renders the element
Openmined('Openmined', 'Openmined', 'an optional tech label')
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

' loads the Item which embeds the element Openmined
include('simpleicons-5/O/Openmined')

' renders the element
Openmined('Openmined', 'Openmined', 'an optional tech label')
@enduml
```


# Openmined


```text
simpleicons-6/O/Openmined
```

```text
include('simpleicons-6/O/Openmined')
```



| Illustration | Openmined |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Openmined.png) | ![illustration for Openmined](../../simpleicons-6/O/Openmined.Local.png) |




## Openmined

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Openmined
include('simpleicons-6/O/Openmined')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Openmined
include('simpleicons-6/O/Openmined')

' renders the element
Openmined('Openmined', 'Openmined', 'an optional tech label')
@enduml
```


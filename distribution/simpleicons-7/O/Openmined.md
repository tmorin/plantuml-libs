# Openmined


```text
simpleicons-7/O/Openmined
```

```text
include('simpleicons-7/O/Openmined')
```



| Illustration | Openmined |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openmined.png) | ![illustration for Openmined](../../simpleicons-7/O/Openmined.Local.png) |




## Openmined

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openmined
include('simpleicons-7/O/Openmined')

' renders the element
Openmined('Openmined', 'Openmined', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openmined
include('simpleicons-7/O/Openmined')

' renders the element
Openmined('Openmined', 'Openmined', 'an optional tech label', 'an optional description')
@enduml
```


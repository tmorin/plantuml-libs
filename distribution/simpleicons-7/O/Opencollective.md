# Opencollective


```text
simpleicons-7/O/Opencollective
```

```text
include('simpleicons-7/O/Opencollective')
```



| Illustration | Opencollective |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Opencollective.png) | ![illustration for Opencollective](../../simpleicons-7/O/Opencollective.Local.png) |




## Opencollective

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Opencollective
include('simpleicons-7/O/Opencollective')

' renders the element
Opencollective('Opencollective', 'Opencollective', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opencollective
include('simpleicons-7/O/Opencollective')

' renders the element
Opencollective('Opencollective', 'Opencollective', 'an optional tech label', 'an optional description')
@enduml
```


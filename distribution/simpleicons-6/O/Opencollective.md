# Opencollective


```text
simpleicons-6/O/Opencollective
```

```text
include('simpleicons-6/O/Opencollective')
```



| Illustration | Opencollective |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Opencollective.png) | ![illustration for Opencollective](../../simpleicons-6/O/Opencollective.Local.png) |




## Opencollective

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Opencollective
include('simpleicons-6/O/Opencollective')

' renders the element
Opencollective('Opencollective', 'Opencollective', 'an optional tech label')
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

' loads the Item which embeds the element Opencollective
include('simpleicons-6/O/Opencollective')

' renders the element
Opencollective('Opencollective', 'Opencollective', 'an optional tech label')
@enduml
```


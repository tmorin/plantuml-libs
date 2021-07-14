# Tripdotcom


```text
simpleicons-5/T/Tripdotcom
```

```text
include('simpleicons-5/T/Tripdotcom')
```



| Illustration | Tripdotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tripdotcom.png) | ![illustration for Tripdotcom](../../simpleicons-5/T/Tripdotcom.Local.png) |




## Tripdotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tripdotcom
include('simpleicons-5/T/Tripdotcom')

' renders the element
Tripdotcom('Tripdotcom', 'Tripdotcom', 'an optional tech label')
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

' loads the Item which embeds the element Tripdotcom
include('simpleicons-5/T/Tripdotcom')

' renders the element
Tripdotcom('Tripdotcom', 'Tripdotcom', 'an optional tech label')
@enduml
```


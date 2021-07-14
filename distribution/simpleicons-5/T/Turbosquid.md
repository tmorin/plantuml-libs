# Turbosquid


```text
simpleicons-5/T/Turbosquid
```

```text
include('simpleicons-5/T/Turbosquid')
```



| Illustration | Turbosquid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Turbosquid.png) | ![illustration for Turbosquid](../../simpleicons-5/T/Turbosquid.Local.png) |




## Turbosquid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Turbosquid
include('simpleicons-5/T/Turbosquid')

' renders the element
Turbosquid('Turbosquid', 'Turbosquid', 'an optional tech label')
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

' loads the Item which embeds the element Turbosquid
include('simpleicons-5/T/Turbosquid')

' renders the element
Turbosquid('Turbosquid', 'Turbosquid', 'an optional tech label')
@enduml
```


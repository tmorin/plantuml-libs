# Vapor


```text
simpleicons-7/V/Vapor
```

```text
include('simpleicons-7/V/Vapor')
```



| Illustration | Vapor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vapor.png) | ![illustration for Vapor](../../simpleicons-7/V/Vapor.Local.png) |




## Vapor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vapor
include('simpleicons-7/V/Vapor')

' renders the element
Vapor('Vapor', 'Vapor', 'an optional tech label')
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

' loads the Item which embeds the element Vapor
include('simpleicons-7/V/Vapor')

' renders the element
Vapor('Vapor', 'Vapor', 'an optional tech label')
@enduml
```


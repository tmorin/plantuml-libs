# Carthrottle


```text
simpleicons-5/C/Carthrottle
```

```text
include('simpleicons-5/C/Carthrottle')
```



| Illustration | Carthrottle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Carthrottle.png) | ![illustration for Carthrottle](../../simpleicons-5/C/Carthrottle.Local.png) |




## Carthrottle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Carthrottle
include('simpleicons-5/C/Carthrottle')

' renders the element
Carthrottle('Carthrottle', 'Carthrottle', 'an optional tech label')
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

' loads the Item which embeds the element Carthrottle
include('simpleicons-5/C/Carthrottle')

' renders the element
Carthrottle('Carthrottle', 'Carthrottle', 'an optional tech label')
@enduml
```


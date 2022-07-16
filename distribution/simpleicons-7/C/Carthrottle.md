# Carthrottle


```text
simpleicons-7/C/Carthrottle
```

```text
include('simpleicons-7/C/Carthrottle')
```



| Illustration | Carthrottle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Carthrottle.png) | ![illustration for Carthrottle](../../simpleicons-7/C/Carthrottle.Local.png) |




## Carthrottle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Carthrottle
include('simpleicons-7/C/Carthrottle')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Carthrottle
include('simpleicons-7/C/Carthrottle')

' renders the element
Carthrottle('Carthrottle', 'Carthrottle', 'an optional tech label')
@enduml
```


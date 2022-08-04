# Zendframework


```text
simpleicons-7/Z/Zendframework
```

```text
include('simpleicons-7/Z/Zendframework')
```



| Illustration | Zendframework |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zendframework.png) | ![illustration for Zendframework](../../simpleicons-7/Z/Zendframework.Local.png) |




## Zendframework

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zendframework
include('simpleicons-7/Z/Zendframework')

' renders the element
Zendframework('Zendframework', 'Zendframework', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zendframework
include('simpleicons-7/Z/Zendframework')

' renders the element
Zendframework('Zendframework', 'Zendframework', 'an optional tech label', 'an optional description')
@enduml
```


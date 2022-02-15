# Zendframework


```text
simpleicons-6/Z/Zendframework
```

```text
include('simpleicons-6/Z/Zendframework')
```



| Illustration | Zendframework |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Z/Zendframework.png) | ![illustration for Zendframework](../../simpleicons-6/Z/Zendframework.Local.png) |




## Zendframework

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Zendframework
include('simpleicons-6/Z/Zendframework')

' renders the element
Zendframework('Zendframework', 'Zendframework', 'an optional tech label')
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

' loads the Item which embeds the element Zendframework
include('simpleicons-6/Z/Zendframework')

' renders the element
Zendframework('Zendframework', 'Zendframework', 'an optional tech label')
@enduml
```


# Red


```text
simpleicons-8/R/Red
```

```text
include('simpleicons-8/R/Red')
```



| Illustration | Red |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Red.png) | ![illustration for Red](../../simpleicons-8/R/Red.Local.png) |




## Red

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Red
include('simpleicons-8/R/Red')

' renders the element
Red('Red', 'Red', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Red
include('simpleicons-8/R/Red')

' renders the element
Red('Red', 'Red', 'an optional tech label', 'an optional description')
@enduml
```


# Prime


```text
simpleicons-7/P/Prime
```

```text
include('simpleicons-7/P/Prime')
```



| Illustration | Prime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Prime.png) | ![illustration for Prime](../../simpleicons-7/P/Prime.Local.png) |




## Prime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Prime
include('simpleicons-7/P/Prime')

' renders the element
Prime('Prime', 'Prime', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prime
include('simpleicons-7/P/Prime')

' renders the element
Prime('Prime', 'Prime', 'an optional tech label', 'an optional description')
@enduml
```


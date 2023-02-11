# Tesla


```text
simpleicons-8/T/Tesla
```

```text
include('simpleicons-8/T/Tesla')
```



| Illustration | Tesla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tesla.png) | ![illustration for Tesla](../../simpleicons-8/T/Tesla.Local.png) |




## Tesla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tesla
include('simpleicons-8/T/Tesla')

' renders the element
Tesla('Tesla', 'Tesla', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tesla
include('simpleicons-8/T/Tesla')

' renders the element
Tesla('Tesla', 'Tesla', 'an optional tech label', 'an optional description')
@enduml
```


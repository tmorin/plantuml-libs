# Tesla


```text
simpleicons-5/T/Tesla
```

```text
include('simpleicons-5/T/Tesla')
```



| Illustration | Tesla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tesla.png) | ![illustration for Tesla](../../simpleicons-5/T/Tesla.Local.png) |




## Tesla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tesla
include('simpleicons-5/T/Tesla')

' renders the element
Tesla('Tesla', 'Tesla', 'an optional tech label')
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

' loads the Item which embeds the element Tesla
include('simpleicons-5/T/Tesla')

' renders the element
Tesla('Tesla', 'Tesla', 'an optional tech label')
@enduml
```


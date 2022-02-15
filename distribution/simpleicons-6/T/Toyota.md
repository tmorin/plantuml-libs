# Toyota


```text
simpleicons-6/T/Toyota
```

```text
include('simpleicons-6/T/Toyota')
```



| Illustration | Toyota |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Toyota.png) | ![illustration for Toyota](../../simpleicons-6/T/Toyota.Local.png) |




## Toyota

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Toyota
include('simpleicons-6/T/Toyota')

' renders the element
Toyota('Toyota', 'Toyota', 'an optional tech label')
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

' loads the Item which embeds the element Toyota
include('simpleicons-6/T/Toyota')

' renders the element
Toyota('Toyota', 'Toyota', 'an optional tech label')
@enduml
```


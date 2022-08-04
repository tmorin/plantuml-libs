# Toyota


```text
simpleicons-7/T/Toyota
```

```text
include('simpleicons-7/T/Toyota')
```



| Illustration | Toyota |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Toyota.png) | ![illustration for Toyota](../../simpleicons-7/T/Toyota.Local.png) |




## Toyota

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Toyota
include('simpleicons-7/T/Toyota')

' renders the element
Toyota('Toyota', 'Toyota', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Toyota
include('simpleicons-7/T/Toyota')

' renders the element
Toyota('Toyota', 'Toyota', 'an optional tech label', 'an optional description')
@enduml
```


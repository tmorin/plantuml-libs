# Mercedes


```text
simpleicons-6/M/Mercedes
```

```text
include('simpleicons-6/M/Mercedes')
```



| Illustration | Mercedes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mercedes.png) | ![illustration for Mercedes](../../simpleicons-6/M/Mercedes.Local.png) |




## Mercedes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mercedes
include('simpleicons-6/M/Mercedes')

' renders the element
Mercedes('Mercedes', 'Mercedes', 'an optional tech label')
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

' loads the Item which embeds the element Mercedes
include('simpleicons-6/M/Mercedes')

' renders the element
Mercedes('Mercedes', 'Mercedes', 'an optional tech label')
@enduml
```


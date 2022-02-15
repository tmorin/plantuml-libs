# Indeed


```text
simpleicons-6/I/Indeed
```

```text
include('simpleicons-6/I/Indeed')
```



| Illustration | Indeed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Indeed.png) | ![illustration for Indeed](../../simpleicons-6/I/Indeed.Local.png) |




## Indeed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Indeed
include('simpleicons-6/I/Indeed')

' renders the element
Indeed('Indeed', 'Indeed', 'an optional tech label')
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

' loads the Item which embeds the element Indeed
include('simpleicons-6/I/Indeed')

' renders the element
Indeed('Indeed', 'Indeed', 'an optional tech label')
@enduml
```


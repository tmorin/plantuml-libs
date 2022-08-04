# Indeed


```text
simpleicons-7/I/Indeed
```

```text
include('simpleicons-7/I/Indeed')
```



| Illustration | Indeed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Indeed.png) | ![illustration for Indeed](../../simpleicons-7/I/Indeed.Local.png) |




## Indeed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Indeed
include('simpleicons-7/I/Indeed')

' renders the element
Indeed('Indeed', 'Indeed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Indeed
include('simpleicons-7/I/Indeed')

' renders the element
Indeed('Indeed', 'Indeed', 'an optional tech label', 'an optional description')
@enduml
```


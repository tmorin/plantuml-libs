# Ford


```text
simpleicons-6/F/Ford
```

```text
include('simpleicons-6/F/Ford')
```



| Illustration | Ford |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Ford.png) | ![illustration for Ford](../../simpleicons-6/F/Ford.Local.png) |




## Ford

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ford
include('simpleicons-6/F/Ford')

' renders the element
Ford('Ford', 'Ford', 'an optional tech label')
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

' loads the Item which embeds the element Ford
include('simpleicons-6/F/Ford')

' renders the element
Ford('Ford', 'Ford', 'an optional tech label')
@enduml
```


# Ford


```text
simpleicons-5/F/Ford
```

```text
include('simpleicons-5/F/Ford')
```



| Illustration | Ford |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Ford.png) | ![illustration for Ford](../../simpleicons-5/F/Ford.Local.png) |




## Ford

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ford
include('simpleicons-5/F/Ford')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ford
include('simpleicons-5/F/Ford')

' renders the element
Ford('Ford', 'Ford', 'an optional tech label')
@enduml
```


# Here


```text
simpleicons-7/H/Here
```

```text
include('simpleicons-7/H/Here')
```



| Illustration | Here |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Here.png) | ![illustration for Here](../../simpleicons-7/H/Here.Local.png) |




## Here

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Here
include('simpleicons-7/H/Here')

' renders the element
Here('Here', 'Here', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Here
include('simpleicons-7/H/Here')

' renders the element
Here('Here', 'Here', 'an optional tech label', 'an optional description')
@enduml
```


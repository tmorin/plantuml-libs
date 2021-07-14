# Opera


```text
simpleicons-5/O/Opera
```

```text
include('simpleicons-5/O/Opera')
```



| Illustration | Opera |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Opera.png) | ![illustration for Opera](../../simpleicons-5/O/Opera.Local.png) |




## Opera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Opera
include('simpleicons-5/O/Opera')

' renders the element
Opera('Opera', 'Opera', 'an optional tech label')
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

' loads the Item which embeds the element Opera
include('simpleicons-5/O/Opera')

' renders the element
Opera('Opera', 'Opera', 'an optional tech label')
@enduml
```


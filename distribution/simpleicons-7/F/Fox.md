# Fox


```text
simpleicons-7/F/Fox
```

```text
include('simpleicons-7/F/Fox')
```



| Illustration | Fox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Fox.png) | ![illustration for Fox](../../simpleicons-7/F/Fox.Local.png) |




## Fox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fox
include('simpleicons-7/F/Fox')

' renders the element
Fox('Fox', 'Fox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fox
include('simpleicons-7/F/Fox')

' renders the element
Fox('Fox', 'Fox', 'an optional tech label', 'an optional description')
@enduml
```


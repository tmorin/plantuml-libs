# Smart


```text
simpleicons-7/S/Smart
```

```text
include('simpleicons-7/S/Smart')
```



| Illustration | Smart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Smart.png) | ![illustration for Smart](../../simpleicons-7/S/Smart.Local.png) |




## Smart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Smart
include('simpleicons-7/S/Smart')

' renders the element
Smart('Smart', 'Smart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smart
include('simpleicons-7/S/Smart')

' renders the element
Smart('Smart', 'Smart', 'an optional tech label', 'an optional description')
@enduml
```


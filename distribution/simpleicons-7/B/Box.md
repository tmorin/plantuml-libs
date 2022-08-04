# Box


```text
simpleicons-7/B/Box
```

```text
include('simpleicons-7/B/Box')
```



| Illustration | Box |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Box.png) | ![illustration for Box](../../simpleicons-7/B/Box.Local.png) |




## Box

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Box
include('simpleicons-7/B/Box')

' renders the element
Box('Box', 'Box', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Box
include('simpleicons-7/B/Box')

' renders the element
Box('Box', 'Box', 'an optional tech label', 'an optional description')
@enduml
```


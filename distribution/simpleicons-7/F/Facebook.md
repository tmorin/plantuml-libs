# Facebook


```text
simpleicons-7/F/Facebook
```

```text
include('simpleicons-7/F/Facebook')
```



| Illustration | Facebook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Facebook.png) | ![illustration for Facebook](../../simpleicons-7/F/Facebook.Local.png) |




## Facebook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Facebook
include('simpleicons-7/F/Facebook')

' renders the element
Facebook('Facebook', 'Facebook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Facebook
include('simpleicons-7/F/Facebook')

' renders the element
Facebook('Facebook', 'Facebook', 'an optional tech label', 'an optional description')
@enduml
```


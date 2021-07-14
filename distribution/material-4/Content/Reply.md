# Reply


```text
material-4/Content/Reply
```

```text
include('material-4/Content/Reply')
```



| Illustration | Reply |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Reply.png) | ![illustration for Reply](../../material-4/Content/Reply.Local.png) |




## Reply

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Reply
include('material-4/Content/Reply')

' renders the element
Reply('Reply', 'Reply', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Reply
include('material-4/Content/Reply')

' renders the element
Reply('Reply', 'Reply', 'an optional tech label')
@enduml
```


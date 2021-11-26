# More


```text
material-4/Notification/More
```

```text
include('material-4/Notification/More')
```



| Illustration | More |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/More.png) | ![illustration for More](../../material-4/Notification/More.Local.png) |




## More

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element More
include('material-4/Notification/More')

' renders the element
More('More', 'More', 'an optional tech label')
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

' loads the Item which embeds the element More
include('material-4/Notification/More')

' renders the element
More('More', 'More', 'an optional tech label')
@enduml
```


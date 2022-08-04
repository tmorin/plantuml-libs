# NotAccessible


```text
material-4/Action/NotAccessible
```

```text
include('material-4/Action/NotAccessible')
```



| Illustration | NotAccessible |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/NotAccessible.png) | ![illustration for NotAccessible](../../material-4/Action/NotAccessible.Local.png) |




## NotAccessible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NotAccessible
include('material-4/Action/NotAccessible')

' renders the element
NotAccessible('NotAccessible', 'Not Accessible', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NotAccessible
include('material-4/Action/NotAccessible')

' renders the element
NotAccessible('NotAccessible', 'Not Accessible', 'an optional tech label', 'an optional description')
@enduml
```


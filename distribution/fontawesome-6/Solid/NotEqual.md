# NotEqual


```text
fontawesome-6/Solid/NotEqual
```

```text
include('fontawesome-6/Solid/NotEqual')
```



| Illustration | NotEqual |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/NotEqual.png) | ![illustration for NotEqual](../../fontawesome-6/Solid/NotEqual.Local.png) |




## NotEqual

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element NotEqual
include('fontawesome-6/Solid/NotEqual')

' renders the element
NotEqual('NotEqual', 'Not Equal', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element NotEqual
include('fontawesome-6/Solid/NotEqual')

' renders the element
NotEqual('NotEqual', 'Not Equal', 'an optional tech label')
@enduml
```


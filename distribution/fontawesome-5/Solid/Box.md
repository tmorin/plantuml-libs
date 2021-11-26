# Box


```text
fontawesome-5/Solid/Box
```

```text
include('fontawesome-5/Solid/Box')
```



| Illustration | Box |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Box.png) | ![illustration for Box](../../fontawesome-5/Solid/Box.Local.png) |




## Box

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Box
include('fontawesome-5/Solid/Box')

' renders the element
Box('Box', 'Box', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Box
include('fontawesome-5/Solid/Box')

' renders the element
Box('Box', 'Box', 'an optional tech label')
@enduml
```


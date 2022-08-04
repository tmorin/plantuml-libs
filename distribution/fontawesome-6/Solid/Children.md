# Children


```text
fontawesome-6/Solid/Children
```

```text
include('fontawesome-6/Solid/Children')
```



| Illustration | Children |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Children.png) | ![illustration for Children](../../fontawesome-6/Solid/Children.Local.png) |




## Children

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Children
include('fontawesome-6/Solid/Children')

' renders the element
Children('Children', 'Children', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Children
include('fontawesome-6/Solid/Children')

' renders the element
Children('Children', 'Children', 'an optional tech label', 'an optional description')
@enduml
```


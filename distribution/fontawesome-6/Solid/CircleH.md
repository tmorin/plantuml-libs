# CircleH


```text
fontawesome-6/Solid/CircleH
```

```text
include('fontawesome-6/Solid/CircleH')
```



| Illustration | CircleH |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CircleH.png) | ![illustration for CircleH](../../fontawesome-6/Solid/CircleH.Local.png) |




## CircleH

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleH
include('fontawesome-6/Solid/CircleH')

' renders the element
CircleH('CircleH', 'Circle H', 'an optional tech label')
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

' loads the Item which embeds the element CircleH
include('fontawesome-6/Solid/CircleH')

' renders the element
CircleH('CircleH', 'Circle H', 'an optional tech label')
@enduml
```


# Football


```text
fontawesome-6/Solid/Football
```

```text
include('fontawesome-6/Solid/Football')
```



| Illustration | Football |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Football.png) | ![illustration for Football](../../fontawesome-6/Solid/Football.Local.png) |




## Football

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Football
include('fontawesome-6/Solid/Football')

' renders the element
Football('Football', 'Football', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Football
include('fontawesome-6/Solid/Football')

' renders the element
Football('Football', 'Football', 'an optional tech label', 'an optional description')
@enduml
```


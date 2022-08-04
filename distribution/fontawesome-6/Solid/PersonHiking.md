# PersonHiking


```text
fontawesome-6/Solid/PersonHiking
```

```text
include('fontawesome-6/Solid/PersonHiking')
```



| Illustration | PersonHiking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonHiking.png) | ![illustration for PersonHiking](../../fontawesome-6/Solid/PersonHiking.Local.png) |




## PersonHiking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonHiking
include('fontawesome-6/Solid/PersonHiking')

' renders the element
PersonHiking('PersonHiking', 'Person Hiking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonHiking
include('fontawesome-6/Solid/PersonHiking')

' renders the element
PersonHiking('PersonHiking', 'Person Hiking', 'an optional tech label', 'an optional description')
@enduml
```


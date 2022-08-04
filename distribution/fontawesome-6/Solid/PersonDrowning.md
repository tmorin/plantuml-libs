# PersonDrowning


```text
fontawesome-6/Solid/PersonDrowning
```

```text
include('fontawesome-6/Solid/PersonDrowning')
```



| Illustration | PersonDrowning |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonDrowning.png) | ![illustration for PersonDrowning](../../fontawesome-6/Solid/PersonDrowning.Local.png) |




## PersonDrowning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonDrowning
include('fontawesome-6/Solid/PersonDrowning')

' renders the element
PersonDrowning('PersonDrowning', 'Person Drowning', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonDrowning
include('fontawesome-6/Solid/PersonDrowning')

' renders the element
PersonDrowning('PersonDrowning', 'Person Drowning', 'an optional tech label', 'an optional description')
@enduml
```


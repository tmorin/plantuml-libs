# PersonBiking


```text
fontawesome-6/Solid/PersonBiking
```

```text
include('fontawesome-6/Solid/PersonBiking')
```



| Illustration | PersonBiking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonBiking.png) | ![illustration for PersonBiking](../../fontawesome-6/Solid/PersonBiking.Local.png) |




## PersonBiking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonBiking
include('fontawesome-6/Solid/PersonBiking')

' renders the element
PersonBiking('PersonBiking', 'Person Biking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonBiking
include('fontawesome-6/Solid/PersonBiking')

' renders the element
PersonBiking('PersonBiking', 'Person Biking', 'an optional tech label', 'an optional description')
@enduml
```


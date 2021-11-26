# SmokingBan


```text
fontawesome-5/Solid/SmokingBan
```

```text
include('fontawesome-5/Solid/SmokingBan')
```



| Illustration | SmokingBan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SmokingBan.png) | ![illustration for SmokingBan](../../fontawesome-5/Solid/SmokingBan.Local.png) |




## SmokingBan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SmokingBan
include('fontawesome-5/Solid/SmokingBan')

' renders the element
SmokingBan('SmokingBan', 'Smoking Ban', 'an optional tech label')
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

' loads the Item which embeds the element SmokingBan
include('fontawesome-5/Solid/SmokingBan')

' renders the element
SmokingBan('SmokingBan', 'Smoking Ban', 'an optional tech label')
@enduml
```


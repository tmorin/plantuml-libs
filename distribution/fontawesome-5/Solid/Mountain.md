# Mountain


```text
fontawesome-5/Solid/Mountain
```

```text
include('fontawesome-5/Solid/Mountain')
```



| Illustration | Mountain |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Mountain.png) | ![illustration for Mountain](../../fontawesome-5/Solid/Mountain.Local.png) |




## Mountain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mountain
include('fontawesome-5/Solid/Mountain')

' renders the element
Mountain('Mountain', 'Mountain', 'an optional tech label')
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

' loads the Item which embeds the element Mountain
include('fontawesome-5/Solid/Mountain')

' renders the element
Mountain('Mountain', 'Mountain', 'an optional tech label')
@enduml
```


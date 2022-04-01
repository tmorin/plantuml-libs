# StaffAesculapius


```text
fontawesome-6/Solid/StaffAesculapius
```

```text
include('fontawesome-6/Solid/StaffAesculapius')
```



| Illustration | StaffAesculapius |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/StaffAesculapius.png) | ![illustration for StaffAesculapius](../../fontawesome-6/Solid/StaffAesculapius.Local.png) |




## StaffAesculapius

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StaffAesculapius
include('fontawesome-6/Solid/StaffAesculapius')

' renders the element
StaffAesculapius('StaffAesculapius', 'Staff Aesculapius', 'an optional tech label')
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

' loads the Item which embeds the element StaffAesculapius
include('fontawesome-6/Solid/StaffAesculapius')

' renders the element
StaffAesculapius('StaffAesculapius', 'Staff Aesculapius', 'an optional tech label')
@enduml
```


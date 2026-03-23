# StaffAesculapius


```text
fontawesome/Solid/StaffAesculapius
```

```text
include('fontawesome/Solid/StaffAesculapius')
```



| Illustration | StaffAesculapius |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/StaffAesculapius.png) | ![illustration for StaffAesculapius](../../fontawesome/Solid/StaffAesculapius.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StaffAesculapiusXs>`
- `<$StaffAesculapiusSm>`
- `<$StaffAesculapiusMd>`
- `<$StaffAesculapiusLg>`





## StaffAesculapius

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StaffAesculapius
include('fontawesome/Solid/StaffAesculapius')

' renders the element
StaffAesculapius('StaffAesculapius', 'Staff Aesculapius', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element StaffAesculapius
include('fontawesome/Solid/StaffAesculapius')

' renders the element
StaffAesculapius('StaffAesculapius', 'Staff Aesculapius', 'an optional tech label', 'an optional description')
@enduml
```


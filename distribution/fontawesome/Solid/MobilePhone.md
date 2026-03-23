# MobilePhone


```text
fontawesome/Solid/MobilePhone
```

```text
include('fontawesome/Solid/MobilePhone')
```



| Illustration | MobilePhone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MobilePhone.png) | ![illustration for MobilePhone](../../fontawesome/Solid/MobilePhone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobilePhoneXs>`
- `<$MobilePhoneSm>`
- `<$MobilePhoneMd>`
- `<$MobilePhoneLg>`





## MobilePhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MobilePhone
include('fontawesome/Solid/MobilePhone')

' renders the element
MobilePhone('MobilePhone', 'Mobile Phone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MobilePhone
include('fontawesome/Solid/MobilePhone')

' renders the element
MobilePhone('MobilePhone', 'Mobile Phone', 'an optional tech label', 'an optional description')
@enduml
```


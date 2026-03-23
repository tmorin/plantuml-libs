# Sms


```text
fontawesome/Solid/Sms
```

```text
include('fontawesome/Solid/Sms')
```



| Illustration | Sms |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Sms.png) | ![illustration for Sms](../../fontawesome/Solid/Sms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmsXs>`
- `<$SmsSm>`
- `<$SmsMd>`
- `<$SmsLg>`





## Sms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Sms
include('fontawesome/Solid/Sms')

' renders the element
Sms('Sms', 'Sms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sms
include('fontawesome/Solid/Sms')

' renders the element
Sms('Sms', 'Sms', 'an optional tech label', 'an optional description')
@enduml
```


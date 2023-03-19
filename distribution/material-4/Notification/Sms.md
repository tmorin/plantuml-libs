# Sms


```text
material-4/Notification/Sms
```

```text
include('material-4/Notification/Sms')
```



| Illustration | Sms |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/Sms.png) | ![illustration for Sms](../../material-4/Notification/Sms.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element Sms
include('material-4/Notification/Sms')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Sms
include('material-4/Notification/Sms')

' renders the element
Sms('Sms', 'Sms', 'an optional tech label', 'an optional description')
@enduml
```


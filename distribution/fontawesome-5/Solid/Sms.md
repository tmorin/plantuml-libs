# Sms


```text
fontawesome-5/Solid/Sms
```

```text
include('fontawesome-5/Solid/Sms')
```



| Illustration | Sms |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Sms.png) | ![illustration for Sms](../../fontawesome-5/Solid/Sms.Local.png) |




## Sms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sms
include('fontawesome-5/Solid/Sms')

' renders the element
Sms('Sms', 'Sms', 'an optional tech label')
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

' loads the Item which embeds the element Sms
include('fontawesome-5/Solid/Sms')

' renders the element
Sms('Sms', 'Sms', 'an optional tech label')
@enduml
```


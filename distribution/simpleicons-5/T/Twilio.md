# Twilio


```text
simpleicons-5/T/Twilio
```

```text
include('simpleicons-5/T/Twilio')
```



| Illustration | Twilio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Twilio.png) | ![illustration for Twilio](../../simpleicons-5/T/Twilio.Local.png) |




## Twilio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Twilio
include('simpleicons-5/T/Twilio')

' renders the element
Twilio('Twilio', 'Twilio', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Twilio
include('simpleicons-5/T/Twilio')

' renders the element
Twilio('Twilio', 'Twilio', 'an optional tech label')
@enduml
```


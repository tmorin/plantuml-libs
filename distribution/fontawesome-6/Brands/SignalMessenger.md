# SignalMessenger


```text
fontawesome-6/Brands/SignalMessenger
```

```text
include('fontawesome-6/Brands/SignalMessenger')
```



| Illustration | SignalMessenger |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SignalMessenger.png) | ![illustration for SignalMessenger](../../fontawesome-6/Brands/SignalMessenger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignalMessengerXs>`
- `<$SignalMessengerSm>`
- `<$SignalMessengerMd>`
- `<$SignalMessengerLg>`





## SignalMessenger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SignalMessenger
include('fontawesome-6/Brands/SignalMessenger')

' renders the element
SignalMessenger('SignalMessenger', 'Signal Messenger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignalMessenger
include('fontawesome-6/Brands/SignalMessenger')

' renders the element
SignalMessenger('SignalMessenger', 'Signal Messenger', 'an optional tech label', 'an optional description')
@enduml
```


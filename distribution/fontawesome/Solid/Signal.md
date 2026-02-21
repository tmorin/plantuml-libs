# Signal


```text
fontawesome/Solid/Signal
```

```text
include('fontawesome/Solid/Signal')
```



| Illustration | Signal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Signal.png) | ![illustration for Signal](../../fontawesome/Solid/Signal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SignalXs>`
- `<$SignalSm>`
- `<$SignalMd>`
- `<$SignalLg>`





## Signal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Signal
include('fontawesome/Solid/Signal')

' renders the element
Signal('Signal', 'Signal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Signal
include('fontawesome/Solid/Signal')

' renders the element
Signal('Signal', 'Signal', 'an optional tech label', 'an optional description')
@enduml
```


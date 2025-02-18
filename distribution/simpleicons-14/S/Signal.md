# Signal


```text
simpleicons-14/S/Signal
```

```text
include('simpleicons-14/S/Signal')
```



| Illustration | Signal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Signal.png) | ![illustration for Signal](../../simpleicons-14/S/Signal.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Signal
include('simpleicons-14/S/Signal')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Signal
include('simpleicons-14/S/Signal')

' renders the element
Signal('Signal', 'Signal', 'an optional tech label', 'an optional description')
@enduml
```


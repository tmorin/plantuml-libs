# Signal


```text
simpleicons-5/S/Signal
```

```text
include('simpleicons-5/S/Signal')
```



| Illustration | Signal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Signal.png) | ![illustration for Signal](../../simpleicons-5/S/Signal.Local.png) |




## Signal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Signal
include('simpleicons-5/S/Signal')

' renders the element
Signal('Signal', 'Signal', 'an optional tech label')
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

' loads the Item which embeds the element Signal
include('simpleicons-5/S/Signal')

' renders the element
Signal('Signal', 'Signal', 'an optional tech label')
@enduml
```


# Signal


```text
simpleicons-6/S/Signal
```

```text
include('simpleicons-6/S/Signal')
```



| Illustration | Signal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Signal.png) | ![illustration for Signal](../../simpleicons-6/S/Signal.Local.png) |




## Signal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Signal
include('simpleicons-6/S/Signal')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Signal
include('simpleicons-6/S/Signal')

' renders the element
Signal('Signal', 'Signal', 'an optional tech label')
@enduml
```


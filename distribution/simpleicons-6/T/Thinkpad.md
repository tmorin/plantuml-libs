# Thinkpad


```text
simpleicons-6/T/Thinkpad
```

```text
include('simpleicons-6/T/Thinkpad')
```



| Illustration | Thinkpad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Thinkpad.png) | ![illustration for Thinkpad](../../simpleicons-6/T/Thinkpad.Local.png) |




## Thinkpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Thinkpad
include('simpleicons-6/T/Thinkpad')

' renders the element
Thinkpad('Thinkpad', 'Thinkpad', 'an optional tech label')
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

' loads the Item which embeds the element Thinkpad
include('simpleicons-6/T/Thinkpad')

' renders the element
Thinkpad('Thinkpad', 'Thinkpad', 'an optional tech label')
@enduml
```


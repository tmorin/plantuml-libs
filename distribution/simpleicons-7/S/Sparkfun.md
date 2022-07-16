# Sparkfun


```text
simpleicons-7/S/Sparkfun
```

```text
include('simpleicons-7/S/Sparkfun')
```



| Illustration | Sparkfun |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sparkfun.png) | ![illustration for Sparkfun](../../simpleicons-7/S/Sparkfun.Local.png) |




## Sparkfun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sparkfun
include('simpleicons-7/S/Sparkfun')

' renders the element
Sparkfun('Sparkfun', 'Sparkfun', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sparkfun
include('simpleicons-7/S/Sparkfun')

' renders the element
Sparkfun('Sparkfun', 'Sparkfun', 'an optional tech label')
@enduml
```


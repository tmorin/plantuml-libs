# Sparkfun


```text
simpleicons-5/S/Sparkfun
```

```text
include('simpleicons-5/S/Sparkfun')
```



| Illustration | Sparkfun |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sparkfun.png) | ![illustration for Sparkfun](../../simpleicons-5/S/Sparkfun.Local.png) |




## Sparkfun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sparkfun
include('simpleicons-5/S/Sparkfun')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sparkfun
include('simpleicons-5/S/Sparkfun')

' renders the element
Sparkfun('Sparkfun', 'Sparkfun', 'an optional tech label')
@enduml
```


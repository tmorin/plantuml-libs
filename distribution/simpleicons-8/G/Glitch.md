# Glitch


```text
simpleicons-8/G/Glitch
```

```text
include('simpleicons-8/G/Glitch')
```



| Illustration | Glitch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Glitch.png) | ![illustration for Glitch](../../simpleicons-8/G/Glitch.Local.png) |




## Glitch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Glitch
include('simpleicons-8/G/Glitch')

' renders the element
Glitch('Glitch', 'Glitch', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Glitch
include('simpleicons-8/G/Glitch')

' renders the element
Glitch('Glitch', 'Glitch', 'an optional tech label', 'an optional description')
@enduml
```


# Glitch


```text
simpleicons-5/G/Glitch
```

```text
include('simpleicons-5/G/Glitch')
```



| Illustration | Glitch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Glitch.png) | ![illustration for Glitch](../../simpleicons-5/G/Glitch.Local.png) |




## Glitch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Glitch
include('simpleicons-5/G/Glitch')

' renders the element
Glitch('Glitch', 'Glitch', 'an optional tech label')
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

' loads the Item which embeds the element Glitch
include('simpleicons-5/G/Glitch')

' renders the element
Glitch('Glitch', 'Glitch', 'an optional tech label')
@enduml
```


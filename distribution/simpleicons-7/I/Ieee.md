# Ieee


```text
simpleicons-7/I/Ieee
```

```text
include('simpleicons-7/I/Ieee')
```



| Illustration | Ieee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Ieee.png) | ![illustration for Ieee](../../simpleicons-7/I/Ieee.Local.png) |




## Ieee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ieee
include('simpleicons-7/I/Ieee')

' renders the element
Ieee('Ieee', 'Ieee', 'an optional tech label')
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

' loads the Item which embeds the element Ieee
include('simpleicons-7/I/Ieee')

' renders the element
Ieee('Ieee', 'Ieee', 'an optional tech label')
@enduml
```

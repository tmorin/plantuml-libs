# Mobx


```text
simpleicons-6/M/Mobx
```

```text
include('simpleicons-6/M/Mobx')
```



| Illustration | Mobx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mobx.png) | ![illustration for Mobx](../../simpleicons-6/M/Mobx.Local.png) |




## Mobx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mobx
include('simpleicons-6/M/Mobx')

' renders the element
Mobx('Mobx', 'Mobx', 'an optional tech label')
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

' loads the Item which embeds the element Mobx
include('simpleicons-6/M/Mobx')

' renders the element
Mobx('Mobx', 'Mobx', 'an optional tech label')
@enduml
```


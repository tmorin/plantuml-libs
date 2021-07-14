# Mobx


```text
simpleicons-5/M/Mobx
```

```text
include('simpleicons-5/M/Mobx')
```



| Illustration | Mobx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mobx.png) | ![illustration for Mobx](../../simpleicons-5/M/Mobx.Local.png) |




## Mobx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mobx
include('simpleicons-5/M/Mobx')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mobx
include('simpleicons-5/M/Mobx')

' renders the element
Mobx('Mobx', 'Mobx', 'an optional tech label')
@enduml
```


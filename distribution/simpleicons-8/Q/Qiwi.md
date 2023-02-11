# Qiwi


```text
simpleicons-8/Q/Qiwi
```

```text
include('simpleicons-8/Q/Qiwi')
```



| Illustration | Qiwi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Q/Qiwi.png) | ![illustration for Qiwi](../../simpleicons-8/Q/Qiwi.Local.png) |




## Qiwi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Qiwi
include('simpleicons-8/Q/Qiwi')

' renders the element
Qiwi('Qiwi', 'Qiwi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qiwi
include('simpleicons-8/Q/Qiwi')

' renders the element
Qiwi('Qiwi', 'Qiwi', 'an optional tech label', 'an optional description')
@enduml
```


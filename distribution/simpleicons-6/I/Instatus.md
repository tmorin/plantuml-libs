# Instatus


```text
simpleicons-6/I/Instatus
```

```text
include('simpleicons-6/I/Instatus')
```



| Illustration | Instatus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Instatus.png) | ![illustration for Instatus](../../simpleicons-6/I/Instatus.Local.png) |




## Instatus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Instatus
include('simpleicons-6/I/Instatus')

' renders the element
Instatus('Instatus', 'Instatus', 'an optional tech label')
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

' loads the Item which embeds the element Instatus
include('simpleicons-6/I/Instatus')

' renders the element
Instatus('Instatus', 'Instatus', 'an optional tech label')
@enduml
```


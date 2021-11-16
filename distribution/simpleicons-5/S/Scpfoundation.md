# Scpfoundation


```text
simpleicons-5/S/Scpfoundation
```

```text
include('simpleicons-5/S/Scpfoundation')
```



| Illustration | Scpfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Scpfoundation.png) | ![illustration for Scpfoundation](../../simpleicons-5/S/Scpfoundation.Local.png) |




## Scpfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Scpfoundation
include('simpleicons-5/S/Scpfoundation')

' renders the element
Scpfoundation('Scpfoundation', 'Scpfoundation', 'an optional tech label')
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

' loads the Item which embeds the element Scpfoundation
include('simpleicons-5/S/Scpfoundation')

' renders the element
Scpfoundation('Scpfoundation', 'Scpfoundation', 'an optional tech label')
@enduml
```

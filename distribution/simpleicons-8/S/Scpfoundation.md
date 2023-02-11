# Scpfoundation


```text
simpleicons-8/S/Scpfoundation
```

```text
include('simpleicons-8/S/Scpfoundation')
```



| Illustration | Scpfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Scpfoundation.png) | ![illustration for Scpfoundation](../../simpleicons-8/S/Scpfoundation.Local.png) |




## Scpfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Scpfoundation
include('simpleicons-8/S/Scpfoundation')

' renders the element
Scpfoundation('Scpfoundation', 'Scpfoundation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scpfoundation
include('simpleicons-8/S/Scpfoundation')

' renders the element
Scpfoundation('Scpfoundation', 'Scpfoundation', 'an optional tech label', 'an optional description')
@enduml
```


# Interactiondesignfoundation


```text
simpleicons-8/I/Interactiondesignfoundation
```

```text
include('simpleicons-8/I/Interactiondesignfoundation')
```



| Illustration | Interactiondesignfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Interactiondesignfoundation.png) | ![illustration for Interactiondesignfoundation](../../simpleicons-8/I/Interactiondesignfoundation.Local.png) |




## Interactiondesignfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Interactiondesignfoundation
include('simpleicons-8/I/Interactiondesignfoundation')

' renders the element
Interactiondesignfoundation('Interactiondesignfoundation', 'Interactiondesignfoundation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Interactiondesignfoundation
include('simpleicons-8/I/Interactiondesignfoundation')

' renders the element
Interactiondesignfoundation('Interactiondesignfoundation', 'Interactiondesignfoundation', 'an optional tech label', 'an optional description')
@enduml
```


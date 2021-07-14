# Starlingbank


```text
simpleicons-5/S/Starlingbank
```

```text
include('simpleicons-5/S/Starlingbank')
```



| Illustration | Starlingbank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Starlingbank.png) | ![illustration for Starlingbank](../../simpleicons-5/S/Starlingbank.Local.png) |




## Starlingbank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Starlingbank
include('simpleicons-5/S/Starlingbank')

' renders the element
Starlingbank('Starlingbank', 'Starlingbank', 'an optional tech label')
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

' loads the Item which embeds the element Starlingbank
include('simpleicons-5/S/Starlingbank')

' renders the element
Starlingbank('Starlingbank', 'Starlingbank', 'an optional tech label')
@enduml
```


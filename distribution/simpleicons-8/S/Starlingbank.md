# Starlingbank


```text
simpleicons-8/S/Starlingbank
```

```text
include('simpleicons-8/S/Starlingbank')
```



| Illustration | Starlingbank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Starlingbank.png) | ![illustration for Starlingbank](../../simpleicons-8/S/Starlingbank.Local.png) |




## Starlingbank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Starlingbank
include('simpleicons-8/S/Starlingbank')

' renders the element
Starlingbank('Starlingbank', 'Starlingbank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Starlingbank
include('simpleicons-8/S/Starlingbank')

' renders the element
Starlingbank('Starlingbank', 'Starlingbank', 'an optional tech label', 'an optional description')
@enduml
```


# Reverbnation


```text
simpleicons-5/R/Reverbnation
```

```text
include('simpleicons-5/R/Reverbnation')
```



| Illustration | Reverbnation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Reverbnation.png) | ![illustration for Reverbnation](../../simpleicons-5/R/Reverbnation.Local.png) |




## Reverbnation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reverbnation
include('simpleicons-5/R/Reverbnation')

' renders the element
Reverbnation('Reverbnation', 'Reverbnation', 'an optional tech label')
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

' loads the Item which embeds the element Reverbnation
include('simpleicons-5/R/Reverbnation')

' renders the element
Reverbnation('Reverbnation', 'Reverbnation', 'an optional tech label')
@enduml
```


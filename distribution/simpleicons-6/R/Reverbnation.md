# Reverbnation


```text
simpleicons-6/R/Reverbnation
```

```text
include('simpleicons-6/R/Reverbnation')
```



| Illustration | Reverbnation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Reverbnation.png) | ![illustration for Reverbnation](../../simpleicons-6/R/Reverbnation.Local.png) |




## Reverbnation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Reverbnation
include('simpleicons-6/R/Reverbnation')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Reverbnation
include('simpleicons-6/R/Reverbnation')

' renders the element
Reverbnation('Reverbnation', 'Reverbnation', 'an optional tech label')
@enduml
```


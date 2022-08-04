# Reverbnation


```text
simpleicons-7/R/Reverbnation
```

```text
include('simpleicons-7/R/Reverbnation')
```



| Illustration | Reverbnation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Reverbnation.png) | ![illustration for Reverbnation](../../simpleicons-7/R/Reverbnation.Local.png) |




## Reverbnation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Reverbnation
include('simpleicons-7/R/Reverbnation')

' renders the element
Reverbnation('Reverbnation', 'Reverbnation', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Reverbnation
include('simpleicons-7/R/Reverbnation')

' renders the element
Reverbnation('Reverbnation', 'Reverbnation', 'an optional tech label', 'an optional description')
@enduml
```


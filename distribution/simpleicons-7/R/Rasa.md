# Rasa


```text
simpleicons-7/R/Rasa
```

```text
include('simpleicons-7/R/Rasa')
```



| Illustration | Rasa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rasa.png) | ![illustration for Rasa](../../simpleicons-7/R/Rasa.Local.png) |




## Rasa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rasa
include('simpleicons-7/R/Rasa')

' renders the element
Rasa('Rasa', 'Rasa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rasa
include('simpleicons-7/R/Rasa')

' renders the element
Rasa('Rasa', 'Rasa', 'an optional tech label', 'an optional description')
@enduml
```


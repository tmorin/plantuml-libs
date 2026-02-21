# Rasa


```text
simpleicons/R/Rasa
```

```text
include('simpleicons/R/Rasa')
```



| Illustration | Rasa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rasa.png) | ![illustration for Rasa](../../simpleicons/R/Rasa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RasaXs>`
- `<$RasaSm>`
- `<$RasaMd>`
- `<$RasaLg>`





## Rasa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rasa
include('simpleicons/R/Rasa')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rasa
include('simpleicons/R/Rasa')

' renders the element
Rasa('Rasa', 'Rasa', 'an optional tech label', 'an optional description')
@enduml
```


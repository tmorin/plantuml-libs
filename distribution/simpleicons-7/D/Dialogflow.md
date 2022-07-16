# Dialogflow


```text
simpleicons-7/D/Dialogflow
```

```text
include('simpleicons-7/D/Dialogflow')
```



| Illustration | Dialogflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dialogflow.png) | ![illustration for Dialogflow](../../simpleicons-7/D/Dialogflow.Local.png) |




## Dialogflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dialogflow
include('simpleicons-7/D/Dialogflow')

' renders the element
Dialogflow('Dialogflow', 'Dialogflow', 'an optional tech label')
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

' loads the Item which embeds the element Dialogflow
include('simpleicons-7/D/Dialogflow')

' renders the element
Dialogflow('Dialogflow', 'Dialogflow', 'an optional tech label')
@enduml
```


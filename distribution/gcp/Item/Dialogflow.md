# Dialogflow


```text
gcp/Item/Dialogflow
```

```text
include('gcp/Item/Dialogflow')
```



| Illustration | Dialogflow | DialogflowCard | DialogflowGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Dialogflow.png) | ![illustration for Dialogflow](../../gcp/Item/Dialogflow.Local.png) | ![illustration for DialogflowCard](../../gcp/Item/DialogflowCard.Local.png) | ![illustration for DialogflowGroup](../../gcp/Item/DialogflowGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DialogflowXs>`
- `<$DialogflowSm>`
- `<$DialogflowMd>`
- `<$DialogflowLg>`





## Dialogflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Dialogflow
include('gcp/Item/Dialogflow')

' renders the element
Dialogflow('Dialogflow', 'Dialogflow', 'an optional tech label', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element Dialogflow
include('gcp/Item/Dialogflow')

' renders the element
Dialogflow('Dialogflow', 'Dialogflow', 'an optional tech label', 'an optional description')
@enduml
```

## DialogflowCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DialogflowCard
include('gcp/Item/Dialogflow')

' renders the element
DialogflowCard('DialogflowCard', 'Dialogflow Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element DialogflowCard
include('gcp/Item/Dialogflow')

' renders the element
DialogflowCard('DialogflowCard', 'Dialogflow Card', 'an optional description')
@enduml
```

## DialogflowGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element DialogflowGroup
include('gcp/Item/Dialogflow')

' renders the element
DialogflowGroup('DialogflowGroup', 'Dialogflow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('gcp/bootstrap')

' loads the Item which embeds the element DialogflowGroup
include('gcp/Item/Dialogflow')

' renders the element
DialogflowGroup('DialogflowGroup', 'Dialogflow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


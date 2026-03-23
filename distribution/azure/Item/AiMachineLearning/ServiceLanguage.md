# ServiceLanguage


```text
azure/Item/AiMachineLearning/ServiceLanguage
```

```text
include('azure/Item/AiMachineLearning/ServiceLanguage')
```



| Illustration | ServiceLanguage | ServiceLanguageCard | ServiceLanguageGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/AiMachineLearning/ServiceLanguage.png) | ![illustration for ServiceLanguage](../../../azure/Item/AiMachineLearning/ServiceLanguage.Local.png) | ![illustration for ServiceLanguageCard](../../../azure/Item/AiMachineLearning/ServiceLanguageCard.Local.png) | ![illustration for ServiceLanguageGroup](../../../azure/Item/AiMachineLearning/ServiceLanguageGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceLanguageXs>`
- `<$ServiceLanguageSm>`
- `<$ServiceLanguageMd>`
- `<$ServiceLanguageLg>`





## ServiceLanguage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLanguage
include('azure/Item/AiMachineLearning/ServiceLanguage')

' renders the element
ServiceLanguage('ServiceLanguage', 'Service Language', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLanguage
include('azure/Item/AiMachineLearning/ServiceLanguage')

' renders the element
ServiceLanguage('ServiceLanguage', 'Service Language', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceLanguageCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLanguageCard
include('azure/Item/AiMachineLearning/ServiceLanguage')

' renders the element
ServiceLanguageCard('ServiceLanguageCard', 'Service Language Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLanguageCard
include('azure/Item/AiMachineLearning/ServiceLanguage')

' renders the element
ServiceLanguageCard('ServiceLanguageCard', 'Service Language Card', 'an optional description')
@enduml
```

## ServiceLanguageGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLanguageGroup
include('azure/Item/AiMachineLearning/ServiceLanguage')

' renders the element
ServiceLanguageGroup('ServiceLanguageGroup', 'Service Language Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLanguageGroup
include('azure/Item/AiMachineLearning/ServiceLanguage')

' renders the element
ServiceLanguageGroup('ServiceLanguageGroup', 'Service Language Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


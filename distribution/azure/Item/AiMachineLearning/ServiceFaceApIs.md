# ServiceFaceApIs


```text
azure/Item/AiMachineLearning/ServiceFaceApIs
```

```text
include('azure/Item/AiMachineLearning/ServiceFaceApIs')
```



| Illustration | ServiceFaceApIs | ServiceFaceApIsCard | ServiceFaceApIsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/AiMachineLearning/ServiceFaceApIs.png) | ![illustration for ServiceFaceApIs](../../../azure/Item/AiMachineLearning/ServiceFaceApIs.Local.png) | ![illustration for ServiceFaceApIsCard](../../../azure/Item/AiMachineLearning/ServiceFaceApIsCard.Local.png) | ![illustration for ServiceFaceApIsGroup](../../../azure/Item/AiMachineLearning/ServiceFaceApIsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceFaceApIsXs>`
- `<$ServiceFaceApIsSm>`
- `<$ServiceFaceApIsMd>`
- `<$ServiceFaceApIsLg>`





## ServiceFaceApIs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceFaceApIs
include('azure/Item/AiMachineLearning/ServiceFaceApIs')

' renders the element
ServiceFaceApIs('ServiceFaceApIs', 'Service Face Ap Is', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceFaceApIs
include('azure/Item/AiMachineLearning/ServiceFaceApIs')

' renders the element
ServiceFaceApIs('ServiceFaceApIs', 'Service Face Ap Is', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceFaceApIsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceFaceApIsCard
include('azure/Item/AiMachineLearning/ServiceFaceApIs')

' renders the element
ServiceFaceApIsCard('ServiceFaceApIsCard', 'Service Face Ap Is Card', 'an optional description')
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

' loads the Item which embeds the element ServiceFaceApIsCard
include('azure/Item/AiMachineLearning/ServiceFaceApIs')

' renders the element
ServiceFaceApIsCard('ServiceFaceApIsCard', 'Service Face Ap Is Card', 'an optional description')
@enduml
```

## ServiceFaceApIsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceFaceApIsGroup
include('azure/Item/AiMachineLearning/ServiceFaceApIs')

' renders the element
ServiceFaceApIsGroup('ServiceFaceApIsGroup', 'Service Face Ap Is Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceFaceApIsGroup
include('azure/Item/AiMachineLearning/ServiceFaceApIs')

' renders the element
ServiceFaceApIsGroup('ServiceFaceApIsGroup', 'Service Face Ap Is Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


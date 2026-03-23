# AwsDeepComposer


```text
aws/Architecture/ArtificialIntelligence/AwsDeepComposer
```

```text
include('aws/Architecture/ArtificialIntelligence/AwsDeepComposer')
```



| Illustration | AwsDeepComposer | AwsDeepComposerCard | AwsDeepComposerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ArtificialIntelligence/AwsDeepComposer.png) | ![illustration for AwsDeepComposer](../../../aws/Architecture/ArtificialIntelligence/AwsDeepComposer.Local.png) | ![illustration for AwsDeepComposerCard](../../../aws/Architecture/ArtificialIntelligence/AwsDeepComposerCard.Local.png) | ![illustration for AwsDeepComposerGroup](../../../aws/Architecture/ArtificialIntelligence/AwsDeepComposerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsDeepComposerXs>`
- `<$AwsDeepComposerSm>`
- `<$AwsDeepComposerMd>`
- `<$AwsDeepComposerLg>`





## AwsDeepComposer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsDeepComposer
include('aws/Architecture/ArtificialIntelligence/AwsDeepComposer')

' renders the element
AwsDeepComposer('AwsDeepComposer', 'Aws Deep Composer', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsDeepComposer
include('aws/Architecture/ArtificialIntelligence/AwsDeepComposer')

' renders the element
AwsDeepComposer('AwsDeepComposer', 'Aws Deep Composer', 'an optional tech label', 'an optional description')
@enduml
```

## AwsDeepComposerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsDeepComposerCard
include('aws/Architecture/ArtificialIntelligence/AwsDeepComposer')

' renders the element
AwsDeepComposerCard('AwsDeepComposerCard', 'Aws Deep Composer Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsDeepComposerCard
include('aws/Architecture/ArtificialIntelligence/AwsDeepComposer')

' renders the element
AwsDeepComposerCard('AwsDeepComposerCard', 'Aws Deep Composer Card', 'an optional description')
@enduml
```

## AwsDeepComposerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsDeepComposerGroup
include('aws/Architecture/ArtificialIntelligence/AwsDeepComposer')

' renders the element
AwsDeepComposerGroup('AwsDeepComposerGroup', 'Aws Deep Composer Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsDeepComposerGroup
include('aws/Architecture/ArtificialIntelligence/AwsDeepComposer')

' renders the element
AwsDeepComposerGroup('AwsDeepComposerGroup', 'Aws Deep Composer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


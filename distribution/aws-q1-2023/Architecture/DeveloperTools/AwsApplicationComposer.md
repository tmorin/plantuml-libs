# AwsApplicationComposer


```text
aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer
```

```text
include('aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer')
```



| Illustration | AwsApplicationComposer | AwsApplicationComposerCard | AwsApplicationComposerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer.png) | ![illustration for AwsApplicationComposer](../../../aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer.Local.png) | ![illustration for AwsApplicationComposerCard](../../../aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposerCard.Local.png) | ![illustration for AwsApplicationComposerGroup](../../../aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsApplicationComposerXs>`
- `<$AwsApplicationComposerSm>`
- `<$AwsApplicationComposerMd>`
- `<$AwsApplicationComposerLg>`





## AwsApplicationComposer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsApplicationComposer
include('aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer')

' renders the element
AwsApplicationComposer('AwsApplicationComposer', 'Aws Application Composer', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsApplicationComposer
include('aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer')

' renders the element
AwsApplicationComposer('AwsApplicationComposer', 'Aws Application Composer', 'an optional tech label', 'an optional description')
@enduml
```

## AwsApplicationComposerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsApplicationComposerCard
include('aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer')

' renders the element
AwsApplicationComposerCard('AwsApplicationComposerCard', 'Aws Application Composer Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsApplicationComposerCard
include('aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer')

' renders the element
AwsApplicationComposerCard('AwsApplicationComposerCard', 'Aws Application Composer Card', 'an optional description')
@enduml
```

## AwsApplicationComposerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsApplicationComposerGroup
include('aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer')

' renders the element
AwsApplicationComposerGroup('AwsApplicationComposerGroup', 'Aws Application Composer Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsApplicationComposerGroup
include('aws-q1-2023/Architecture/DeveloperTools/AwsApplicationComposer')

' renders the element
AwsApplicationComposerGroup('AwsApplicationComposerGroup', 'Aws Application Composer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


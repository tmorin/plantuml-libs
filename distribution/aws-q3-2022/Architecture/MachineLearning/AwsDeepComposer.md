# AwsDeepComposer


```text
aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer
```

```text
include('aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer')
```



| Illustration | AwsDeepComposer | AwsDeepComposerCard | AwsDeepComposerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer.png) | ![illustration for AwsDeepComposer](../../../aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer.Local.png) | ![illustration for AwsDeepComposerCard](../../../aws-q3-2022/Architecture/MachineLearning/AwsDeepComposerCard.Local.png) | ![illustration for AwsDeepComposerGroup](../../../aws-q3-2022/Architecture/MachineLearning/AwsDeepComposerGroup.Local.png) |




## AwsDeepComposer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsDeepComposer
include('aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsDeepComposer
include('aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsDeepComposerCard
include('aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsDeepComposerCard
include('aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsDeepComposerGroup
include('aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsDeepComposerGroup
include('aws-q3-2022/Architecture/MachineLearning/AwsDeepComposer')

' renders the element
AwsDeepComposerGroup('AwsDeepComposerGroup', 'Aws Deep Composer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


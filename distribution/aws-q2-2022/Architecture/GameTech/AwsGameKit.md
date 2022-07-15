# AwsGameKit


```text
aws-q2-2022/Architecture/GameTech/AwsGameKit
```

```text
include('aws-q2-2022/Architecture/GameTech/AwsGameKit')
```



| Illustration | AwsGameKit | AwsGameKitCard | AwsGameKitGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/GameTech/AwsGameKit.png) | ![illustration for AwsGameKit](../../../aws-q2-2022/Architecture/GameTech/AwsGameKit.Local.png) | ![illustration for AwsGameKitCard](../../../aws-q2-2022/Architecture/GameTech/AwsGameKitCard.Local.png) | ![illustration for AwsGameKitGroup](../../../aws-q2-2022/Architecture/GameTech/AwsGameKitGroup.Local.png) |




## AwsGameKit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsGameKit
include('aws-q2-2022/Architecture/GameTech/AwsGameKit')

' renders the element
AwsGameKit('AwsGameKit', 'Aws Game Kit', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsGameKit
include('aws-q2-2022/Architecture/GameTech/AwsGameKit')

' renders the element
AwsGameKit('AwsGameKit', 'Aws Game Kit', 'an optional tech label')
@enduml
```

## AwsGameKitCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsGameKitCard
include('aws-q2-2022/Architecture/GameTech/AwsGameKit')

' renders the element
AwsGameKitCard('AwsGameKitCard', 'Aws Game Kit Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsGameKitCard
include('aws-q2-2022/Architecture/GameTech/AwsGameKit')

' renders the element
AwsGameKitCard('AwsGameKitCard', 'Aws Game Kit Card', 'an optional description')
@enduml
```

## AwsGameKitGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsGameKitGroup
include('aws-q2-2022/Architecture/GameTech/AwsGameKit')

' renders the element
AwsGameKitGroup('AwsGameKitGroup', 'Aws Game Kit Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsGameKitGroup
include('aws-q2-2022/Architecture/GameTech/AwsGameKit')

' renders the element
AwsGameKitGroup('AwsGameKitGroup', 'Aws Game Kit Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsCloudDevelopmentKit


```text
aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')
```



| Illustration | AwsCloudDevelopmentKit | AwsCloudDevelopmentKitCard | AwsCloudDevelopmentKitGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit.png) | ![illustration for AwsCloudDevelopmentKit](../../../aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit.Local.png) | ![illustration for AwsCloudDevelopmentKitCard](../../../aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKitCard.Local.png) | ![illustration for AwsCloudDevelopmentKitGroup](../../../aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKitGroup.Local.png) |




## AwsCloudDevelopmentKit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudDevelopmentKit
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')

' renders the element
AwsCloudDevelopmentKit('AwsCloudDevelopmentKit', 'Aws Cloud Development Kit', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudDevelopmentKit
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')

' renders the element
AwsCloudDevelopmentKit('AwsCloudDevelopmentKit', 'Aws Cloud Development Kit', 'an optional tech label')
@enduml
```

## AwsCloudDevelopmentKitCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudDevelopmentKitCard
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')

' renders the element
AwsCloudDevelopmentKitCard('AwsCloudDevelopmentKitCard', 'Aws Cloud Development Kit Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudDevelopmentKitCard
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')

' renders the element
AwsCloudDevelopmentKitCard('AwsCloudDevelopmentKitCard', 'Aws Cloud Development Kit Card', 'an optional description')
@enduml
```

## AwsCloudDevelopmentKitGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudDevelopmentKitGroup
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')

' renders the element
AwsCloudDevelopmentKitGroup('AwsCloudDevelopmentKitGroup', 'Aws Cloud Development Kit Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudDevelopmentKitGroup
include('aws-20210131/Architecture/DeveloperTools/AwsCloudDevelopmentKit')

' renders the element
AwsCloudDevelopmentKitGroup('AwsCloudDevelopmentKitGroup', 'Aws Cloud Development Kit Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


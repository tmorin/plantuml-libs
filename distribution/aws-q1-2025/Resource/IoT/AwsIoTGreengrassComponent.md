# AwsIoTGreengrassComponent


```text
aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent
```

```text
include('aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent')
```



| Illustration | AwsIoTGreengrassComponent | AwsIoTGreengrassComponentCard | AwsIoTGreengrassComponentGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent.png) | ![illustration for AwsIoTGreengrassComponent](../../../aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent.Local.png) | ![illustration for AwsIoTGreengrassComponentCard](../../../aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponentCard.Local.png) | ![illustration for AwsIoTGreengrassComponentGroup](../../../aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponentGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTGreengrassComponentXs>`
- `<$AwsIoTGreengrassComponentSm>`
- `<$AwsIoTGreengrassComponentMd>`
- `<$AwsIoTGreengrassComponentLg>`





## AwsIoTGreengrassComponent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTGreengrassComponent
include('aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent')

' renders the element
AwsIoTGreengrassComponent('AwsIoTGreengrassComponent', 'Aws Io T Greengrass Component', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTGreengrassComponent
include('aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent')

' renders the element
AwsIoTGreengrassComponent('AwsIoTGreengrassComponent', 'Aws Io T Greengrass Component', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTGreengrassComponentCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTGreengrassComponentCard
include('aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent')

' renders the element
AwsIoTGreengrassComponentCard('AwsIoTGreengrassComponentCard', 'Aws Io T Greengrass Component Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTGreengrassComponentCard
include('aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent')

' renders the element
AwsIoTGreengrassComponentCard('AwsIoTGreengrassComponentCard', 'Aws Io T Greengrass Component Card', 'an optional description')
@enduml
```

## AwsIoTGreengrassComponentGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTGreengrassComponentGroup
include('aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent')

' renders the element
AwsIoTGreengrassComponentGroup('AwsIoTGreengrassComponentGroup', 'Aws Io T Greengrass Component Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTGreengrassComponentGroup
include('aws-q1-2025/Resource/IoT/AwsIoTGreengrassComponent')

' renders the element
AwsIoTGreengrassComponentGroup('AwsIoTGreengrassComponentGroup', 'Aws Io T Greengrass Component Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


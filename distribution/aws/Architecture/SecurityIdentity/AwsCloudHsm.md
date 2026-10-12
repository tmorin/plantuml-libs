# AwsCloudHsm


```text
aws/Architecture/SecurityIdentity/AwsCloudHsm
```

```text
include('aws/Architecture/SecurityIdentity/AwsCloudHsm')
```



| Illustration | AwsCloudHsm | AwsCloudHsmCard | AwsCloudHsmGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/SecurityIdentity/AwsCloudHsm.png) | ![illustration for AwsCloudHsm](../../../aws/Architecture/SecurityIdentity/AwsCloudHsm.Local.png) | ![illustration for AwsCloudHsmCard](../../../aws/Architecture/SecurityIdentity/AwsCloudHsmCard.Local.png) | ![illustration for AwsCloudHsmGroup](../../../aws/Architecture/SecurityIdentity/AwsCloudHsmGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsCloudHsmXs>`
- `<$AwsCloudHsmSm>`
- `<$AwsCloudHsmMd>`
- `<$AwsCloudHsmLg>`





## AwsCloudHsm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsCloudHsm
include('aws/Architecture/SecurityIdentity/AwsCloudHsm')

' renders the element
AwsCloudHsm('AwsCloudHsm', 'Aws Cloud Hsm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsCloudHsm
include('aws/Architecture/SecurityIdentity/AwsCloudHsm')

' renders the element
AwsCloudHsm('AwsCloudHsm', 'Aws Cloud Hsm', 'an optional tech label', 'an optional description')
@enduml
```

## AwsCloudHsmCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsCloudHsmCard
include('aws/Architecture/SecurityIdentity/AwsCloudHsm')

' renders the element
AwsCloudHsmCard('AwsCloudHsmCard', 'Aws Cloud Hsm Card', 'an optional description')
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

' loads the Item which embeds the element AwsCloudHsmCard
include('aws/Architecture/SecurityIdentity/AwsCloudHsm')

' renders the element
AwsCloudHsmCard('AwsCloudHsmCard', 'Aws Cloud Hsm Card', 'an optional description')
@enduml
```

## AwsCloudHsmGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsCloudHsmGroup
include('aws/Architecture/SecurityIdentity/AwsCloudHsm')

' renders the element
AwsCloudHsmGroup('AwsCloudHsmGroup', 'Aws Cloud Hsm Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCloudHsmGroup
include('aws/Architecture/SecurityIdentity/AwsCloudHsm')

' renders the element
AwsCloudHsmGroup('AwsCloudHsmGroup', 'Aws Cloud Hsm Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


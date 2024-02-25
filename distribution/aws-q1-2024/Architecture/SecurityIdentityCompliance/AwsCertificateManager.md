# AwsCertificateManager


```text
aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager
```

```text
include('aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager')
```



| Illustration | AwsCertificateManager | AwsCertificateManagerCard | AwsCertificateManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager.png) | ![illustration for AwsCertificateManager](../../../aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager.Local.png) | ![illustration for AwsCertificateManagerCard](../../../aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManagerCard.Local.png) | ![illustration for AwsCertificateManagerGroup](../../../aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManagerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsCertificateManagerXs>`
- `<$AwsCertificateManagerSm>`
- `<$AwsCertificateManagerMd>`
- `<$AwsCertificateManagerLg>`





## AwsCertificateManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsCertificateManager
include('aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManager('AwsCertificateManager', 'Aws Certificate Manager', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsCertificateManager
include('aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManager('AwsCertificateManager', 'Aws Certificate Manager', 'an optional tech label', 'an optional description')
@enduml
```

## AwsCertificateManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsCertificateManagerCard
include('aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManagerCard('AwsCertificateManagerCard', 'Aws Certificate Manager Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsCertificateManagerCard
include('aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManagerCard('AwsCertificateManagerCard', 'Aws Certificate Manager Card', 'an optional description')
@enduml
```

## AwsCertificateManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsCertificateManagerGroup
include('aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManagerGroup('AwsCertificateManagerGroup', 'Aws Certificate Manager Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsCertificateManagerGroup
include('aws-q1-2024/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManagerGroup('AwsCertificateManagerGroup', 'Aws Certificate Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


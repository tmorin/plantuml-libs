# AwsCertificateManager


```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')
```



| Illustration | AwsCertificateManager | AwsCertificateManagerCard | AwsCertificateManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager.png) | ![illustration for AwsCertificateManager](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager.Local.png) | ![illustration for AwsCertificateManagerCard](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManagerCard.Local.png) | ![illustration for AwsCertificateManagerGroup](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManagerGroup.Local.png) |




## AwsCertificateManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCertificateManager
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManager('AwsCertificateManager', 'Aws Certificate Manager', 'an optional tech label')
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

' loads the Item which embeds the element AwsCertificateManager
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManager('AwsCertificateManager', 'Aws Certificate Manager', 'an optional tech label')
@enduml
```

## AwsCertificateManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCertificateManagerCard
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCertificateManagerCard
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManagerCard('AwsCertificateManagerCard', 'Aws Certificate Manager Card', 'an optional description')
@enduml
```

## AwsCertificateManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCertificateManagerGroup
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCertificateManagerGroup
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsCertificateManager')

' renders the element
AwsCertificateManagerGroup('AwsCertificateManagerGroup', 'Aws Certificate Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsSigner


```text
aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner
```

```text
include('aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner')
```



| Illustration | AwsSigner | AwsSignerCard | AwsSignerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner.png) | ![illustration for AwsSigner](../../../aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner.Local.png) | ![illustration for AwsSignerCard](../../../aws-20210730/Architecture/SecurityIdentityCompliance/AwsSignerCard.Local.png) | ![illustration for AwsSignerGroup](../../../aws-20210730/Architecture/SecurityIdentityCompliance/AwsSignerGroup.Local.png) |




## AwsSigner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsSigner
include('aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner')

' renders the element
AwsSigner('AwsSigner', 'Aws Signer', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsSigner
include('aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner')

' renders the element
AwsSigner('AwsSigner', 'Aws Signer', 'an optional tech label')
@enduml
```

## AwsSignerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsSignerCard
include('aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner')

' renders the element
AwsSignerCard('AwsSignerCard', 'Aws Signer Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsSignerCard
include('aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner')

' renders the element
AwsSignerCard('AwsSignerCard', 'Aws Signer Card', 'an optional description')
@enduml
```

## AwsSignerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsSignerGroup
include('aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner')

' renders the element
AwsSignerGroup('AwsSignerGroup', 'Aws Signer Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsSignerGroup
include('aws-20210730/Architecture/SecurityIdentityCompliance/AwsSigner')

' renders the element
AwsSignerGroup('AwsSignerGroup', 'Aws Signer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsIoTCertificate


```text
aws-q2-2023/Resource/IoT/AwsIoTCertificate
```

```text
include('aws-q2-2023/Resource/IoT/AwsIoTCertificate')
```



| Illustration | AwsIoTCertificate | AwsIoTCertificateCard | AwsIoTCertificateGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Resource/IoT/AwsIoTCertificate.png) | ![illustration for AwsIoTCertificate](../../../aws-q2-2023/Resource/IoT/AwsIoTCertificate.Local.png) | ![illustration for AwsIoTCertificateCard](../../../aws-q2-2023/Resource/IoT/AwsIoTCertificateCard.Local.png) | ![illustration for AwsIoTCertificateGroup](../../../aws-q2-2023/Resource/IoT/AwsIoTCertificateGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTCertificateXs>`
- `<$AwsIoTCertificateSm>`
- `<$AwsIoTCertificateMd>`
- `<$AwsIoTCertificateLg>`





## AwsIoTCertificate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCertificate
include('aws-q2-2023/Resource/IoT/AwsIoTCertificate')

' renders the element
AwsIoTCertificate('AwsIoTCertificate', 'Aws Io T Certificate', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCertificate
include('aws-q2-2023/Resource/IoT/AwsIoTCertificate')

' renders the element
AwsIoTCertificate('AwsIoTCertificate', 'Aws Io T Certificate', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTCertificateCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCertificateCard
include('aws-q2-2023/Resource/IoT/AwsIoTCertificate')

' renders the element
AwsIoTCertificateCard('AwsIoTCertificateCard', 'Aws Io T Certificate Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCertificateCard
include('aws-q2-2023/Resource/IoT/AwsIoTCertificate')

' renders the element
AwsIoTCertificateCard('AwsIoTCertificateCard', 'Aws Io T Certificate Card', 'an optional description')
@enduml
```

## AwsIoTCertificateGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCertificateGroup
include('aws-q2-2023/Resource/IoT/AwsIoTCertificate')

' renders the element
AwsIoTCertificateGroup('AwsIoTCertificateGroup', 'Aws Io T Certificate Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTCertificateGroup
include('aws-q2-2023/Resource/IoT/AwsIoTCertificate')

' renders the element
AwsIoTCertificateGroup('AwsIoTCertificateGroup', 'Aws Io T Certificate Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


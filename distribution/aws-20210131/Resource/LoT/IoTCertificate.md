# IoTCertificate


```text
aws-20210131/Resource/LoT/IoTCertificate
```

```text
include('aws-20210131/Resource/LoT/IoTCertificate')
```



| Illustration | IoTCertificate | IoTCertificateCard | IoTCertificateGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTCertificate.png) | ![illustration for IoTCertificate](../../../aws-20210131/Resource/LoT/IoTCertificate.Local.png) | ![illustration for IoTCertificateCard](../../../aws-20210131/Resource/LoT/IoTCertificateCard.Local.png) | ![illustration for IoTCertificateGroup](../../../aws-20210131/Resource/LoT/IoTCertificateGroup.Local.png) |




## IoTCertificate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTCertificate
include('aws-20210131/Resource/LoT/IoTCertificate')

' renders the element
IoTCertificate('IoTCertificate', 'Io T Certificate', 'an optional tech label')
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

' loads the Item which embeds the element IoTCertificate
include('aws-20210131/Resource/LoT/IoTCertificate')

' renders the element
IoTCertificate('IoTCertificate', 'Io T Certificate', 'an optional tech label')
@enduml
```

## IoTCertificateCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTCertificateCard
include('aws-20210131/Resource/LoT/IoTCertificate')

' renders the element
IoTCertificateCard('IoTCertificateCard', 'Io T Certificate Card', 'an optional description')
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

' loads the Item which embeds the element IoTCertificateCard
include('aws-20210131/Resource/LoT/IoTCertificate')

' renders the element
IoTCertificateCard('IoTCertificateCard', 'Io T Certificate Card', 'an optional description')
@enduml
```

## IoTCertificateGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTCertificateGroup
include('aws-20210131/Resource/LoT/IoTCertificate')

' renders the element
IoTCertificateGroup('IoTCertificateGroup', 'Io T Certificate Group', 'an optional tech label') {
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

' loads the Item which embeds the element IoTCertificateGroup
include('aws-20210131/Resource/LoT/IoTCertificate')

' renders the element
IoTCertificateGroup('IoTCertificateGroup', 'Io T Certificate Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsTrainingCertification


```text
aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification
```

```text
include('aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification')
```



| Illustration | AwsTrainingCertification | AwsTrainingCertificationCard | AwsTrainingCertificationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification.png) | ![illustration for AwsTrainingCertification](../../../aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification.Local.png) | ![illustration for AwsTrainingCertificationCard](../../../aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertificationCard.Local.png) | ![illustration for AwsTrainingCertificationGroup](../../../aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertificationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsTrainingCertificationXs>`
- `<$AwsTrainingCertificationSm>`
- `<$AwsTrainingCertificationMd>`
- `<$AwsTrainingCertificationLg>`





## AwsTrainingCertification

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsTrainingCertification
include('aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification')

' renders the element
AwsTrainingCertification('AwsTrainingCertification', 'Aws Training Certification', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsTrainingCertification
include('aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification')

' renders the element
AwsTrainingCertification('AwsTrainingCertification', 'Aws Training Certification', 'an optional tech label', 'an optional description')
@enduml
```

## AwsTrainingCertificationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsTrainingCertificationCard
include('aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification')

' renders the element
AwsTrainingCertificationCard('AwsTrainingCertificationCard', 'Aws Training Certification Card', 'an optional description')
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

' loads the Item which embeds the element AwsTrainingCertificationCard
include('aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification')

' renders the element
AwsTrainingCertificationCard('AwsTrainingCertificationCard', 'Aws Training Certification Card', 'an optional description')
@enduml
```

## AwsTrainingCertificationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsTrainingCertificationGroup
include('aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification')

' renders the element
AwsTrainingCertificationGroup('AwsTrainingCertificationGroup', 'Aws Training Certification Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsTrainingCertificationGroup
include('aws-q2-2023/Architecture/CustomerEnablement/AwsTrainingCertification')

' renders the element
AwsTrainingCertificationGroup('AwsTrainingCertificationGroup', 'Aws Training Certification Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


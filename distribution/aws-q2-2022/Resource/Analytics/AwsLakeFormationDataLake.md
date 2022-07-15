# AwsLakeFormationDataLake


```text
aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake
```

```text
include('aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake')
```



| Illustration | AwsLakeFormationDataLake | AwsLakeFormationDataLakeCard | AwsLakeFormationDataLakeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake.png) | ![illustration for AwsLakeFormationDataLake](../../../aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake.Local.png) | ![illustration for AwsLakeFormationDataLakeCard](../../../aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLakeCard.Local.png) | ![illustration for AwsLakeFormationDataLakeGroup](../../../aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLakeGroup.Local.png) |




## AwsLakeFormationDataLake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsLakeFormationDataLake
include('aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake')

' renders the element
AwsLakeFormationDataLake('AwsLakeFormationDataLake', 'Aws Lake Formation Data Lake', 'an optional tech label')
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

' loads the Item which embeds the element AwsLakeFormationDataLake
include('aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake')

' renders the element
AwsLakeFormationDataLake('AwsLakeFormationDataLake', 'Aws Lake Formation Data Lake', 'an optional tech label')
@enduml
```

## AwsLakeFormationDataLakeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsLakeFormationDataLakeCard
include('aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake')

' renders the element
AwsLakeFormationDataLakeCard('AwsLakeFormationDataLakeCard', 'Aws Lake Formation Data Lake Card', 'an optional description')
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

' loads the Item which embeds the element AwsLakeFormationDataLakeCard
include('aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake')

' renders the element
AwsLakeFormationDataLakeCard('AwsLakeFormationDataLakeCard', 'Aws Lake Formation Data Lake Card', 'an optional description')
@enduml
```

## AwsLakeFormationDataLakeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsLakeFormationDataLakeGroup
include('aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake')

' renders the element
AwsLakeFormationDataLakeGroup('AwsLakeFormationDataLakeGroup', 'Aws Lake Formation Data Lake Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsLakeFormationDataLakeGroup
include('aws-q2-2022/Resource/Analytics/AwsLakeFormationDataLake')

' renders the element
AwsLakeFormationDataLakeGroup('AwsLakeFormationDataLakeGroup', 'Aws Lake Formation Data Lake Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


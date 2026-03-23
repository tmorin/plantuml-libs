# AwsLakeFormation


```text
aws/Architecture/Analytics/AwsLakeFormation
```

```text
include('aws/Architecture/Analytics/AwsLakeFormation')
```



| Illustration | AwsLakeFormation | AwsLakeFormationCard | AwsLakeFormationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/Analytics/AwsLakeFormation.png) | ![illustration for AwsLakeFormation](../../../aws/Architecture/Analytics/AwsLakeFormation.Local.png) | ![illustration for AwsLakeFormationCard](../../../aws/Architecture/Analytics/AwsLakeFormationCard.Local.png) | ![illustration for AwsLakeFormationGroup](../../../aws/Architecture/Analytics/AwsLakeFormationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsLakeFormationXs>`
- `<$AwsLakeFormationSm>`
- `<$AwsLakeFormationMd>`
- `<$AwsLakeFormationLg>`





## AwsLakeFormation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsLakeFormation
include('aws/Architecture/Analytics/AwsLakeFormation')

' renders the element
AwsLakeFormation('AwsLakeFormation', 'Aws Lake Formation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsLakeFormation
include('aws/Architecture/Analytics/AwsLakeFormation')

' renders the element
AwsLakeFormation('AwsLakeFormation', 'Aws Lake Formation', 'an optional tech label', 'an optional description')
@enduml
```

## AwsLakeFormationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsLakeFormationCard
include('aws/Architecture/Analytics/AwsLakeFormation')

' renders the element
AwsLakeFormationCard('AwsLakeFormationCard', 'Aws Lake Formation Card', 'an optional description')
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

' loads the Item which embeds the element AwsLakeFormationCard
include('aws/Architecture/Analytics/AwsLakeFormation')

' renders the element
AwsLakeFormationCard('AwsLakeFormationCard', 'Aws Lake Formation Card', 'an optional description')
@enduml
```

## AwsLakeFormationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsLakeFormationGroup
include('aws/Architecture/Analytics/AwsLakeFormation')

' renders the element
AwsLakeFormationGroup('AwsLakeFormationGroup', 'Aws Lake Formation Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsLakeFormationGroup
include('aws/Architecture/Analytics/AwsLakeFormation')

' renders the element
AwsLakeFormationGroup('AwsLakeFormationGroup', 'Aws Lake Formation Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


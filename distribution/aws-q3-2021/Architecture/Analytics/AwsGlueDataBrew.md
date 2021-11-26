# AwsGlueDataBrew


```text
aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew
```

```text
include('aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew')
```



| Illustration | AwsGlueDataBrew | AwsGlueDataBrewCard | AwsGlueDataBrewGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew.png) | ![illustration for AwsGlueDataBrew](../../../aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew.Local.png) | ![illustration for AwsGlueDataBrewCard](../../../aws-q3-2021/Architecture/Analytics/AwsGlueDataBrewCard.Local.png) | ![illustration for AwsGlueDataBrewGroup](../../../aws-q3-2021/Architecture/Analytics/AwsGlueDataBrewGroup.Local.png) |




## AwsGlueDataBrew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueDataBrew
include('aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew')

' renders the element
AwsGlueDataBrew('AwsGlueDataBrew', 'Aws Glue Data Brew', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueDataBrew
include('aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew')

' renders the element
AwsGlueDataBrew('AwsGlueDataBrew', 'Aws Glue Data Brew', 'an optional tech label')
@enduml
```

## AwsGlueDataBrewCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueDataBrewCard
include('aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew')

' renders the element
AwsGlueDataBrewCard('AwsGlueDataBrewCard', 'Aws Glue Data Brew Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueDataBrewCard
include('aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew')

' renders the element
AwsGlueDataBrewCard('AwsGlueDataBrewCard', 'Aws Glue Data Brew Card', 'an optional description')
@enduml
```

## AwsGlueDataBrewGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueDataBrewGroup
include('aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew')

' renders the element
AwsGlueDataBrewGroup('AwsGlueDataBrewGroup', 'Aws Glue Data Brew Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsGlueDataBrewGroup
include('aws-q3-2021/Architecture/Analytics/AwsGlueDataBrew')

' renders the element
AwsGlueDataBrewGroup('AwsGlueDataBrewGroup', 'Aws Glue Data Brew Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


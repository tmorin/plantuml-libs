# AwsSnowcone


```text
aws-20210131/Architecture/Storage/AwsSnowcone
```

```text
include('aws-20210131/Architecture/Storage/AwsSnowcone')
```



| Illustration | AwsSnowcone | AwsSnowconeCard | AwsSnowconeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Storage/AwsSnowcone.png) | ![illustration for AwsSnowcone](../../../aws-20210131/Architecture/Storage/AwsSnowcone.Local.png) | ![illustration for AwsSnowconeCard](../../../aws-20210131/Architecture/Storage/AwsSnowconeCard.Local.png) | ![illustration for AwsSnowconeGroup](../../../aws-20210131/Architecture/Storage/AwsSnowconeGroup.Local.png) |




## AwsSnowcone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsSnowcone
include('aws-20210131/Architecture/Storage/AwsSnowcone')

' renders the element
AwsSnowcone('AwsSnowcone', 'Aws Snowcone', 'an optional tech label')
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

' loads the Item which embeds the element AwsSnowcone
include('aws-20210131/Architecture/Storage/AwsSnowcone')

' renders the element
AwsSnowcone('AwsSnowcone', 'Aws Snowcone', 'an optional tech label')
@enduml
```

## AwsSnowconeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsSnowconeCard
include('aws-20210131/Architecture/Storage/AwsSnowcone')

' renders the element
AwsSnowconeCard('AwsSnowconeCard', 'Aws Snowcone Card', 'an optional description')
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

' loads the Item which embeds the element AwsSnowconeCard
include('aws-20210131/Architecture/Storage/AwsSnowcone')

' renders the element
AwsSnowconeCard('AwsSnowconeCard', 'Aws Snowcone Card', 'an optional description')
@enduml
```

## AwsSnowconeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsSnowconeGroup
include('aws-20210131/Architecture/Storage/AwsSnowcone')

' renders the element
AwsSnowconeGroup('AwsSnowconeGroup', 'Aws Snowcone Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsSnowconeGroup
include('aws-20210131/Architecture/Storage/AwsSnowcone')

' renders the element
AwsSnowconeGroup('AwsSnowconeGroup', 'Aws Snowcone Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


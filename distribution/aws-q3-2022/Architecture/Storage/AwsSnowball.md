# AwsSnowball


```text
aws-q3-2022/Architecture/Storage/AwsSnowball
```

```text
include('aws-q3-2022/Architecture/Storage/AwsSnowball')
```



| Illustration | AwsSnowball | AwsSnowballCard | AwsSnowballGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/Storage/AwsSnowball.png) | ![illustration for AwsSnowball](../../../aws-q3-2022/Architecture/Storage/AwsSnowball.Local.png) | ![illustration for AwsSnowballCard](../../../aws-q3-2022/Architecture/Storage/AwsSnowballCard.Local.png) | ![illustration for AwsSnowballGroup](../../../aws-q3-2022/Architecture/Storage/AwsSnowballGroup.Local.png) |




## AwsSnowball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSnowball
include('aws-q3-2022/Architecture/Storage/AwsSnowball')

' renders the element
AwsSnowball('AwsSnowball', 'Aws Snowball', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSnowball
include('aws-q3-2022/Architecture/Storage/AwsSnowball')

' renders the element
AwsSnowball('AwsSnowball', 'Aws Snowball', 'an optional tech label', 'an optional description')
@enduml
```

## AwsSnowballCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSnowballCard
include('aws-q3-2022/Architecture/Storage/AwsSnowball')

' renders the element
AwsSnowballCard('AwsSnowballCard', 'Aws Snowball Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSnowballCard
include('aws-q3-2022/Architecture/Storage/AwsSnowball')

' renders the element
AwsSnowballCard('AwsSnowballCard', 'Aws Snowball Card', 'an optional description')
@enduml
```

## AwsSnowballGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSnowballGroup
include('aws-q3-2022/Architecture/Storage/AwsSnowball')

' renders the element
AwsSnowballGroup('AwsSnowballGroup', 'Aws Snowball Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSnowballGroup
include('aws-q3-2022/Architecture/Storage/AwsSnowball')

' renders the element
AwsSnowballGroup('AwsSnowballGroup', 'Aws Snowball Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


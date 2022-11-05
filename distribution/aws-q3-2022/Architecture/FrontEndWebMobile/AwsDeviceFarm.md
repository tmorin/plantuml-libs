# AwsDeviceFarm


```text
aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm
```

```text
include('aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm')
```



| Illustration | AwsDeviceFarm | AwsDeviceFarmCard | AwsDeviceFarmGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm.png) | ![illustration for AwsDeviceFarm](../../../aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm.Local.png) | ![illustration for AwsDeviceFarmCard](../../../aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarmCard.Local.png) | ![illustration for AwsDeviceFarmGroup](../../../aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarmGroup.Local.png) |




## AwsDeviceFarm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsDeviceFarm
include('aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm')

' renders the element
AwsDeviceFarm('AwsDeviceFarm', 'Aws Device Farm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsDeviceFarm
include('aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm')

' renders the element
AwsDeviceFarm('AwsDeviceFarm', 'Aws Device Farm', 'an optional tech label', 'an optional description')
@enduml
```

## AwsDeviceFarmCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsDeviceFarmCard
include('aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm')

' renders the element
AwsDeviceFarmCard('AwsDeviceFarmCard', 'Aws Device Farm Card', 'an optional description')
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

' loads the Item which embeds the element AwsDeviceFarmCard
include('aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm')

' renders the element
AwsDeviceFarmCard('AwsDeviceFarmCard', 'Aws Device Farm Card', 'an optional description')
@enduml
```

## AwsDeviceFarmGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsDeviceFarmGroup
include('aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm')

' renders the element
AwsDeviceFarmGroup('AwsDeviceFarmGroup', 'Aws Device Farm Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsDeviceFarmGroup
include('aws-q3-2022/Architecture/FrontEndWebMobile/AwsDeviceFarm')

' renders the element
AwsDeviceFarmGroup('AwsDeviceFarmGroup', 'Aws Device Farm Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


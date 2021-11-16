# AwsIoTDeviceManagement


```text
aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement
```

```text
include('aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement')
```



| Illustration | AwsIoTDeviceManagement | AwsIoTDeviceManagementCard | AwsIoTDeviceManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement.png) | ![illustration for AwsIoTDeviceManagement](../../../aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement.Local.png) | ![illustration for AwsIoTDeviceManagementCard](../../../aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagementCard.Local.png) | ![illustration for AwsIoTDeviceManagementGroup](../../../aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagementGroup.Local.png) |




## AwsIoTDeviceManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceManagement
include('aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement')

' renders the element
AwsIoTDeviceManagement('AwsIoTDeviceManagement', 'Aws Io T Device Management', 'an optional tech label')
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

' loads the Item which embeds the element AwsIoTDeviceManagement
include('aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement')

' renders the element
AwsIoTDeviceManagement('AwsIoTDeviceManagement', 'Aws Io T Device Management', 'an optional tech label')
@enduml
```

## AwsIoTDeviceManagementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceManagementCard
include('aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement')

' renders the element
AwsIoTDeviceManagementCard('AwsIoTDeviceManagementCard', 'Aws Io T Device Management Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTDeviceManagementCard
include('aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement')

' renders the element
AwsIoTDeviceManagementCard('AwsIoTDeviceManagementCard', 'Aws Io T Device Management Card', 'an optional description')
@enduml
```

## AwsIoTDeviceManagementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceManagementGroup
include('aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement')

' renders the element
AwsIoTDeviceManagementGroup('AwsIoTDeviceManagementGroup', 'Aws Io T Device Management Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTDeviceManagementGroup
include('aws-q3-2021/Architecture/InternetOfThings/AwsIoTDeviceManagement')

' renders the element
AwsIoTDeviceManagementGroup('AwsIoTDeviceManagementGroup', 'Aws Io T Device Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


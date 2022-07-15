# AwsIoTServo


```text
aws-q2-2022/Resource/LoT/AwsIoTServo
```

```text
include('aws-q2-2022/Resource/LoT/AwsIoTServo')
```



| Illustration | AwsIoTServo | AwsIoTServoCard | AwsIoTServoGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/LoT/AwsIoTServo.png) | ![illustration for AwsIoTServo](../../../aws-q2-2022/Resource/LoT/AwsIoTServo.Local.png) | ![illustration for AwsIoTServoCard](../../../aws-q2-2022/Resource/LoT/AwsIoTServoCard.Local.png) | ![illustration for AwsIoTServoGroup](../../../aws-q2-2022/Resource/LoT/AwsIoTServoGroup.Local.png) |




## AwsIoTServo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTServo
include('aws-q2-2022/Resource/LoT/AwsIoTServo')

' renders the element
AwsIoTServo('AwsIoTServo', 'Aws Io T Servo', 'an optional tech label')
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

' loads the Item which embeds the element AwsIoTServo
include('aws-q2-2022/Resource/LoT/AwsIoTServo')

' renders the element
AwsIoTServo('AwsIoTServo', 'Aws Io T Servo', 'an optional tech label')
@enduml
```

## AwsIoTServoCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTServoCard
include('aws-q2-2022/Resource/LoT/AwsIoTServo')

' renders the element
AwsIoTServoCard('AwsIoTServoCard', 'Aws Io T Servo Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTServoCard
include('aws-q2-2022/Resource/LoT/AwsIoTServo')

' renders the element
AwsIoTServoCard('AwsIoTServoCard', 'Aws Io T Servo Card', 'an optional description')
@enduml
```

## AwsIoTServoGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTServoGroup
include('aws-q2-2022/Resource/LoT/AwsIoTServo')

' renders the element
AwsIoTServoGroup('AwsIoTServoGroup', 'Aws Io T Servo Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTServoGroup
include('aws-q2-2022/Resource/LoT/AwsIoTServo')

' renders the element
AwsIoTServoGroup('AwsIoTServoGroup', 'Aws Io T Servo Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# IoTServo


```text
aws-20210131/Resource/LoT/IoTServo
```

```text
include('aws-20210131/Resource/LoT/IoTServo')
```



| Illustration | IoTServo | IoTServoCard | IoTServoGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTServo.png) | ![illustration for IoTServo](../../../aws-20210131/Resource/LoT/IoTServo.Local.png) | ![illustration for IoTServoCard](../../../aws-20210131/Resource/LoT/IoTServoCard.Local.png) | ![illustration for IoTServoGroup](../../../aws-20210131/Resource/LoT/IoTServoGroup.Local.png) |




## IoTServo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTServo
include('aws-20210131/Resource/LoT/IoTServo')

' renders the element
IoTServo('IoTServo', 'Io T Servo', 'an optional tech label')
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

' loads the Item which embeds the element IoTServo
include('aws-20210131/Resource/LoT/IoTServo')

' renders the element
IoTServo('IoTServo', 'Io T Servo', 'an optional tech label')
@enduml
```

## IoTServoCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTServoCard
include('aws-20210131/Resource/LoT/IoTServo')

' renders the element
IoTServoCard('IoTServoCard', 'Io T Servo Card', 'an optional description')
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

' loads the Item which embeds the element IoTServoCard
include('aws-20210131/Resource/LoT/IoTServo')

' renders the element
IoTServoCard('IoTServoCard', 'Io T Servo Card', 'an optional description')
@enduml
```

## IoTServoGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTServoGroup
include('aws-20210131/Resource/LoT/IoTServo')

' renders the element
IoTServoGroup('IoTServoGroup', 'Io T Servo Group', 'an optional tech label') {
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

' loads the Item which embeds the element IoTServoGroup
include('aws-20210131/Resource/LoT/IoTServo')

' renders the element
IoTServoGroup('IoTServoGroup', 'Io T Servo Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


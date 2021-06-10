# Robotics


```text
aws-20210131/Category/Robotics
```

```text
include('aws-20210131/Category/Robotics')
```



| Illustration | Robotics | RoboticsCard | RoboticsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Category/Robotics.png) | ![illustration for Robotics](../../aws-20210131/Category/Robotics.Local.png) | ![illustration for RoboticsCard](../../aws-20210131/Category/RoboticsCard.Local.png) | ![illustration for RoboticsGroup](../../aws-20210131/Category/RoboticsGroup.Local.png) |




## Robotics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Robotics
include('aws-20210131/Category/Robotics')

' renders the element
Robotics('Robotics', 'Robotics', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element Robotics
include('aws-20210131/Category/Robotics')

' renders the element
Robotics('Robotics', 'Robotics', 'an optional tech label')
@enduml
```

## RoboticsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element RoboticsCard
include('aws-20210131/Category/Robotics')

' renders the element
RoboticsCard('RoboticsCard', 'Robotics Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element RoboticsCard
include('aws-20210131/Category/Robotics')

' renders the element
RoboticsCard('RoboticsCard', 'Robotics Card', 'an optional description')
@enduml
```

## RoboticsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element RoboticsGroup
include('aws-20210131/Category/Robotics')

' renders the element
RoboticsGroup('RoboticsGroup', 'Robotics Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element RoboticsGroup
include('aws-20210131/Category/Robotics')

' renders the element
RoboticsGroup('RoboticsGroup', 'Robotics Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


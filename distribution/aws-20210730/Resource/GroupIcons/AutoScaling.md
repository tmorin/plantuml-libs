# AutoScaling


```text
aws-20210730/Resource/GroupIcons/AutoScaling
```

```text
include('aws-20210730/Resource/GroupIcons/AutoScaling')
```



| Illustration | AutoScaling | AutoScalingCard | AutoScalingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/GroupIcons/AutoScaling.png) | ![illustration for AutoScaling](../../../aws-20210730/Resource/GroupIcons/AutoScaling.Local.png) | ![illustration for AutoScalingCard](../../../aws-20210730/Resource/GroupIcons/AutoScalingCard.Local.png) | ![illustration for AutoScalingGroup](../../../aws-20210730/Resource/GroupIcons/AutoScalingGroup.Local.png) |




## AutoScaling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AutoScaling
include('aws-20210730/Resource/GroupIcons/AutoScaling')

' renders the element
AutoScaling('AutoScaling', 'Auto Scaling', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AutoScaling
include('aws-20210730/Resource/GroupIcons/AutoScaling')

' renders the element
AutoScaling('AutoScaling', 'Auto Scaling', 'an optional tech label')
@enduml
```

## AutoScalingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AutoScalingCard
include('aws-20210730/Resource/GroupIcons/AutoScaling')

' renders the element
AutoScalingCard('AutoScalingCard', 'Auto Scaling Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AutoScalingCard
include('aws-20210730/Resource/GroupIcons/AutoScaling')

' renders the element
AutoScalingCard('AutoScalingCard', 'Auto Scaling Card', 'an optional description')
@enduml
```

## AutoScalingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AutoScalingGroup
include('aws-20210730/Resource/GroupIcons/AutoScaling')

' renders the element
AutoScalingGroup('AutoScalingGroup', 'Auto Scaling Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AutoScalingGroup
include('aws-20210730/Resource/GroupIcons/AutoScaling')

' renders the element
AutoScalingGroup('AutoScalingGroup', 'Auto Scaling Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


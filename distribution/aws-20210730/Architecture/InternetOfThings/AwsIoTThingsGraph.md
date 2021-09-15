# AwsIoTThingsGraph


```text
aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph
```

```text
include('aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph')
```



| Illustration | AwsIoTThingsGraph | AwsIoTThingsGraphCard | AwsIoTThingsGraphGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph.png) | ![illustration for AwsIoTThingsGraph](../../../aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph.Local.png) | ![illustration for AwsIoTThingsGraphCard](../../../aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraphCard.Local.png) | ![illustration for AwsIoTThingsGraphGroup](../../../aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraphGroup.Local.png) |




## AwsIoTThingsGraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingsGraph
include('aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph')

' renders the element
AwsIoTThingsGraph('AwsIoTThingsGraph', 'Aws Io T Things Graph', 'an optional tech label')
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

' loads the Item which embeds the element AwsIoTThingsGraph
include('aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph')

' renders the element
AwsIoTThingsGraph('AwsIoTThingsGraph', 'Aws Io T Things Graph', 'an optional tech label')
@enduml
```

## AwsIoTThingsGraphCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingsGraphCard
include('aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph')

' renders the element
AwsIoTThingsGraphCard('AwsIoTThingsGraphCard', 'Aws Io T Things Graph Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTThingsGraphCard
include('aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph')

' renders the element
AwsIoTThingsGraphCard('AwsIoTThingsGraphCard', 'Aws Io T Things Graph Card', 'an optional description')
@enduml
```

## AwsIoTThingsGraphGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTThingsGraphGroup
include('aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph')

' renders the element
AwsIoTThingsGraphGroup('AwsIoTThingsGraphGroup', 'Aws Io T Things Graph Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTThingsGraphGroup
include('aws-20210730/Architecture/InternetOfThings/AwsIoTThingsGraph')

' renders the element
AwsIoTThingsGraphGroup('AwsIoTThingsGraphGroup', 'Aws Io T Things Graph Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


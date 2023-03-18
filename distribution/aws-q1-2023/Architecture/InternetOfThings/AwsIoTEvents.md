# AwsIoTEvents


```text
aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents
```

```text
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents')
```



| Illustration | AwsIoTEvents | AwsIoTEventsCard | AwsIoTEventsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents.png) | ![illustration for AwsIoTEvents](../../../aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents.Local.png) | ![illustration for AwsIoTEventsCard](../../../aws-q1-2023/Architecture/InternetOfThings/AwsIoTEventsCard.Local.png) | ![illustration for AwsIoTEventsGroup](../../../aws-q1-2023/Architecture/InternetOfThings/AwsIoTEventsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTEventsXs>`
- `<$AwsIoTEventsSm>`
- `<$AwsIoTEventsMd>`
- `<$AwsIoTEventsLg>`





## AwsIoTEvents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEvents
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents')

' renders the element
AwsIoTEvents('AwsIoTEvents', 'Aws Io T Events', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEvents
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents')

' renders the element
AwsIoTEvents('AwsIoTEvents', 'Aws Io T Events', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTEventsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEventsCard
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents')

' renders the element
AwsIoTEventsCard('AwsIoTEventsCard', 'Aws Io T Events Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEventsCard
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents')

' renders the element
AwsIoTEventsCard('AwsIoTEventsCard', 'Aws Io T Events Card', 'an optional description')
@enduml
```

## AwsIoTEventsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEventsGroup
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents')

' renders the element
AwsIoTEventsGroup('AwsIoTEventsGroup', 'Aws Io T Events Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEventsGroup
include('aws-q1-2023/Architecture/InternetOfThings/AwsIoTEvents')

' renders the element
AwsIoTEventsGroup('AwsIoTEventsGroup', 'Aws Io T Events Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


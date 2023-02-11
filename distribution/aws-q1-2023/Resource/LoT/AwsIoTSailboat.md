# AwsIoTSailboat


```text
aws-q1-2023/Resource/LoT/AwsIoTSailboat
```

```text
include('aws-q1-2023/Resource/LoT/AwsIoTSailboat')
```



| Illustration | AwsIoTSailboat | AwsIoTSailboatCard | AwsIoTSailboatGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/LoT/AwsIoTSailboat.png) | ![illustration for AwsIoTSailboat](../../../aws-q1-2023/Resource/LoT/AwsIoTSailboat.Local.png) | ![illustration for AwsIoTSailboatCard](../../../aws-q1-2023/Resource/LoT/AwsIoTSailboatCard.Local.png) | ![illustration for AwsIoTSailboatGroup](../../../aws-q1-2023/Resource/LoT/AwsIoTSailboatGroup.Local.png) |




## AwsIoTSailboat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTSailboat
include('aws-q1-2023/Resource/LoT/AwsIoTSailboat')

' renders the element
AwsIoTSailboat('AwsIoTSailboat', 'Aws Io T Sailboat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoTSailboat
include('aws-q1-2023/Resource/LoT/AwsIoTSailboat')

' renders the element
AwsIoTSailboat('AwsIoTSailboat', 'Aws Io T Sailboat', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTSailboatCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTSailboatCard
include('aws-q1-2023/Resource/LoT/AwsIoTSailboat')

' renders the element
AwsIoTSailboatCard('AwsIoTSailboatCard', 'Aws Io T Sailboat Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTSailboatCard
include('aws-q1-2023/Resource/LoT/AwsIoTSailboat')

' renders the element
AwsIoTSailboatCard('AwsIoTSailboatCard', 'Aws Io T Sailboat Card', 'an optional description')
@enduml
```

## AwsIoTSailboatGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTSailboatGroup
include('aws-q1-2023/Resource/LoT/AwsIoTSailboat')

' renders the element
AwsIoTSailboatGroup('AwsIoTSailboatGroup', 'Aws Io T Sailboat Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTSailboatGroup
include('aws-q1-2023/Resource/LoT/AwsIoTSailboat')

' renders the element
AwsIoTSailboatGroup('AwsIoTSailboatGroup', 'Aws Io T Sailboat Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


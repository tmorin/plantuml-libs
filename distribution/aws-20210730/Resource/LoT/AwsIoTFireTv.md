# AwsIoTFireTv


```text
aws-20210730/Resource/LoT/AwsIoTFireTv
```

```text
include('aws-20210730/Resource/LoT/AwsIoTFireTv')
```



| Illustration | AwsIoTFireTv | AwsIoTFireTvCard | AwsIoTFireTvGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/LoT/AwsIoTFireTv.png) | ![illustration for AwsIoTFireTv](../../../aws-20210730/Resource/LoT/AwsIoTFireTv.Local.png) | ![illustration for AwsIoTFireTvCard](../../../aws-20210730/Resource/LoT/AwsIoTFireTvCard.Local.png) | ![illustration for AwsIoTFireTvGroup](../../../aws-20210730/Resource/LoT/AwsIoTFireTvGroup.Local.png) |




## AwsIoTFireTv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTFireTv
include('aws-20210730/Resource/LoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTv('AwsIoTFireTv', 'Aws Io T Fire Tv', 'an optional tech label')
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

' loads the Item which embeds the element AwsIoTFireTv
include('aws-20210730/Resource/LoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTv('AwsIoTFireTv', 'Aws Io T Fire Tv', 'an optional tech label')
@enduml
```

## AwsIoTFireTvCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTFireTvCard
include('aws-20210730/Resource/LoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTvCard('AwsIoTFireTvCard', 'Aws Io T Fire Tv Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTFireTvCard
include('aws-20210730/Resource/LoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTvCard('AwsIoTFireTvCard', 'Aws Io T Fire Tv Card', 'an optional description')
@enduml
```

## AwsIoTFireTvGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTFireTvGroup
include('aws-20210730/Resource/LoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTvGroup('AwsIoTFireTvGroup', 'Aws Io T Fire Tv Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTFireTvGroup
include('aws-20210730/Resource/LoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTvGroup('AwsIoTFireTvGroup', 'Aws Io T Fire Tv Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


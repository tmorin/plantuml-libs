# AwsIoTShadow


```text
aws-20210730/Resource/LoT/AwsIoTShadow
```

```text
include('aws-20210730/Resource/LoT/AwsIoTShadow')
```



| Illustration | AwsIoTShadow | AwsIoTShadowCard | AwsIoTShadowGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/LoT/AwsIoTShadow.png) | ![illustration for AwsIoTShadow](../../../aws-20210730/Resource/LoT/AwsIoTShadow.Local.png) | ![illustration for AwsIoTShadowCard](../../../aws-20210730/Resource/LoT/AwsIoTShadowCard.Local.png) | ![illustration for AwsIoTShadowGroup](../../../aws-20210730/Resource/LoT/AwsIoTShadowGroup.Local.png) |




## AwsIoTShadow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTShadow
include('aws-20210730/Resource/LoT/AwsIoTShadow')

' renders the element
AwsIoTShadow('AwsIoTShadow', 'Aws Io T Shadow', 'an optional tech label')
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

' loads the Item which embeds the element AwsIoTShadow
include('aws-20210730/Resource/LoT/AwsIoTShadow')

' renders the element
AwsIoTShadow('AwsIoTShadow', 'Aws Io T Shadow', 'an optional tech label')
@enduml
```

## AwsIoTShadowCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTShadowCard
include('aws-20210730/Resource/LoT/AwsIoTShadow')

' renders the element
AwsIoTShadowCard('AwsIoTShadowCard', 'Aws Io T Shadow Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTShadowCard
include('aws-20210730/Resource/LoT/AwsIoTShadow')

' renders the element
AwsIoTShadowCard('AwsIoTShadowCard', 'Aws Io T Shadow Card', 'an optional description')
@enduml
```

## AwsIoTShadowGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTShadowGroup
include('aws-20210730/Resource/LoT/AwsIoTShadow')

' renders the element
AwsIoTShadowGroup('AwsIoTShadowGroup', 'Aws Io T Shadow Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTShadowGroup
include('aws-20210730/Resource/LoT/AwsIoTShadow')

' renders the element
AwsIoTShadowGroup('AwsIoTShadowGroup', 'Aws Io T Shadow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsThinkboxKrakatoa


```text
aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa
```

```text
include('aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa')
```



| Illustration | AwsThinkboxKrakatoa | AwsThinkboxKrakatoaCard | AwsThinkboxKrakatoaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa.png) | ![illustration for AwsThinkboxKrakatoa](../../../aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa.Local.png) | ![illustration for AwsThinkboxKrakatoaCard](../../../aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoaCard.Local.png) | ![illustration for AwsThinkboxKrakatoaGroup](../../../aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoaGroup.Local.png) |




## AwsThinkboxKrakatoa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsThinkboxKrakatoa
include('aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa')

' renders the element
AwsThinkboxKrakatoa('AwsThinkboxKrakatoa', 'Aws Thinkbox Krakatoa', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsThinkboxKrakatoa
include('aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa')

' renders the element
AwsThinkboxKrakatoa('AwsThinkboxKrakatoa', 'Aws Thinkbox Krakatoa', 'an optional tech label', 'an optional description')
@enduml
```

## AwsThinkboxKrakatoaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsThinkboxKrakatoaCard
include('aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa')

' renders the element
AwsThinkboxKrakatoaCard('AwsThinkboxKrakatoaCard', 'Aws Thinkbox Krakatoa Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsThinkboxKrakatoaCard
include('aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa')

' renders the element
AwsThinkboxKrakatoaCard('AwsThinkboxKrakatoaCard', 'Aws Thinkbox Krakatoa Card', 'an optional description')
@enduml
```

## AwsThinkboxKrakatoaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsThinkboxKrakatoaGroup
include('aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa')

' renders the element
AwsThinkboxKrakatoaGroup('AwsThinkboxKrakatoaGroup', 'Aws Thinkbox Krakatoa Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsThinkboxKrakatoaGroup
include('aws-q3-2022/Architecture/Compute/AwsThinkboxKrakatoa')

' renders the element
AwsThinkboxKrakatoaGroup('AwsThinkboxKrakatoaGroup', 'Aws Thinkbox Krakatoa Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


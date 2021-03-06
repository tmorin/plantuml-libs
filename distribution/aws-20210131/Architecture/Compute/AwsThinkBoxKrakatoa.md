# AwsThinkBoxKrakatoa


```text
aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa
```

```text
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')
```



| Illustration | AwsThinkBoxKrakatoa | AwsThinkBoxKrakatoaCard | AwsThinkBoxKrakatoaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa.png) | ![illustration for AwsThinkBoxKrakatoa](../../../aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa.Local.png) | ![illustration for AwsThinkBoxKrakatoaCard](../../../aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoaCard.Local.png) | ![illustration for AwsThinkBoxKrakatoaGroup](../../../aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoaGroup.Local.png) |




## AwsThinkBoxKrakatoa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsThinkBoxKrakatoa
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')

' renders the element
AwsThinkBoxKrakatoa('AwsThinkBoxKrakatoa', 'Aws Think Box Krakatoa', 'an optional tech label')
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

' loads the Item which embeds the element AwsThinkBoxKrakatoa
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')

' renders the element
AwsThinkBoxKrakatoa('AwsThinkBoxKrakatoa', 'Aws Think Box Krakatoa', 'an optional tech label')
@enduml
```

## AwsThinkBoxKrakatoaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsThinkBoxKrakatoaCard
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')

' renders the element
AwsThinkBoxKrakatoaCard('AwsThinkBoxKrakatoaCard', 'Aws Think Box Krakatoa Card', 'an optional description')
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

' loads the Item which embeds the element AwsThinkBoxKrakatoaCard
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')

' renders the element
AwsThinkBoxKrakatoaCard('AwsThinkBoxKrakatoaCard', 'Aws Think Box Krakatoa Card', 'an optional description')
@enduml
```

## AwsThinkBoxKrakatoaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsThinkBoxKrakatoaGroup
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')

' renders the element
AwsThinkBoxKrakatoaGroup('AwsThinkBoxKrakatoaGroup', 'Aws Think Box Krakatoa Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsThinkBoxKrakatoaGroup
include('aws-20210131/Architecture/Compute/AwsThinkBoxKrakatoa')

' renders the element
AwsThinkBoxKrakatoaGroup('AwsThinkBoxKrakatoaGroup', 'Aws Think Box Krakatoa Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


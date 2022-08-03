# AwsThinkBoxStoke


```text
aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke
```

```text
include('aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke')
```



| Illustration | AwsThinkBoxStoke | AwsThinkBoxStokeCard | AwsThinkBoxStokeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke.png) | ![illustration for AwsThinkBoxStoke](../../../aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke.Local.png) | ![illustration for AwsThinkBoxStokeCard](../../../aws-q2-2022/Architecture/Compute/AwsThinkBoxStokeCard.Local.png) | ![illustration for AwsThinkBoxStokeGroup](../../../aws-q2-2022/Architecture/Compute/AwsThinkBoxStokeGroup.Local.png) |




## AwsThinkBoxStoke

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsThinkBoxStoke
include('aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke')

' renders the element
AwsThinkBoxStoke('AwsThinkBoxStoke', 'Aws Think Box Stoke', 'an optional tech label', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsThinkBoxStoke
include('aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke')

' renders the element
AwsThinkBoxStoke('AwsThinkBoxStoke', 'Aws Think Box Stoke', 'an optional tech label', 'an optional description')
@enduml
```

## AwsThinkBoxStokeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsThinkBoxStokeCard
include('aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke')

' renders the element
AwsThinkBoxStokeCard('AwsThinkBoxStokeCard', 'Aws Think Box Stoke Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsThinkBoxStokeCard
include('aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke')

' renders the element
AwsThinkBoxStokeCard('AwsThinkBoxStokeCard', 'Aws Think Box Stoke Card', 'an optional description')
@enduml
```

## AwsThinkBoxStokeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsThinkBoxStokeGroup
include('aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke')

' renders the element
AwsThinkBoxStokeGroup('AwsThinkBoxStokeGroup', 'Aws Think Box Stoke Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsThinkBoxStokeGroup
include('aws-q2-2022/Architecture/Compute/AwsThinkBoxStoke')

' renders the element
AwsThinkBoxStokeGroup('AwsThinkBoxStokeGroup', 'Aws Think Box Stoke Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


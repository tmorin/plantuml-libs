# AwsActivate


```text
aws-q2-2024/Architecture/CustomerEnablement/AwsActivate
```

```text
include('aws-q2-2024/Architecture/CustomerEnablement/AwsActivate')
```



| Illustration | AwsActivate | AwsActivateCard | AwsActivateGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/CustomerEnablement/AwsActivate.png) | ![illustration for AwsActivate](../../../aws-q2-2024/Architecture/CustomerEnablement/AwsActivate.Local.png) | ![illustration for AwsActivateCard](../../../aws-q2-2024/Architecture/CustomerEnablement/AwsActivateCard.Local.png) | ![illustration for AwsActivateGroup](../../../aws-q2-2024/Architecture/CustomerEnablement/AwsActivateGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsActivateXs>`
- `<$AwsActivateSm>`
- `<$AwsActivateMd>`
- `<$AwsActivateLg>`





## AwsActivate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsActivate
include('aws-q2-2024/Architecture/CustomerEnablement/AwsActivate')

' renders the element
AwsActivate('AwsActivate', 'Aws Activate', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsActivate
include('aws-q2-2024/Architecture/CustomerEnablement/AwsActivate')

' renders the element
AwsActivate('AwsActivate', 'Aws Activate', 'an optional tech label', 'an optional description')
@enduml
```

## AwsActivateCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsActivateCard
include('aws-q2-2024/Architecture/CustomerEnablement/AwsActivate')

' renders the element
AwsActivateCard('AwsActivateCard', 'Aws Activate Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsActivateCard
include('aws-q2-2024/Architecture/CustomerEnablement/AwsActivate')

' renders the element
AwsActivateCard('AwsActivateCard', 'Aws Activate Card', 'an optional description')
@enduml
```

## AwsActivateGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsActivateGroup
include('aws-q2-2024/Architecture/CustomerEnablement/AwsActivate')

' renders the element
AwsActivateGroup('AwsActivateGroup', 'Aws Activate Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsActivateGroup
include('aws-q2-2024/Architecture/CustomerEnablement/AwsActivate')

' renders the element
AwsActivateGroup('AwsActivateGroup', 'Aws Activate Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


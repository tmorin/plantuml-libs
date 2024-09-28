# AwsIoT1Click


```text
aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click
```

```text
include('aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click')
```



| Illustration | AwsIoT1Click | AwsIoT1ClickCard | AwsIoT1ClickGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click.png) | ![illustration for AwsIoT1Click](../../../aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click.Local.png) | ![illustration for AwsIoT1ClickCard](../../../aws-q2-2024/Architecture/InternetOfThings/AwsIoT1ClickCard.Local.png) | ![illustration for AwsIoT1ClickGroup](../../../aws-q2-2024/Architecture/InternetOfThings/AwsIoT1ClickGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoT1ClickXs>`
- `<$AwsIoT1ClickSm>`
- `<$AwsIoT1ClickMd>`
- `<$AwsIoT1ClickLg>`





## AwsIoT1Click

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoT1Click
include('aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click')

' renders the element
AwsIoT1Click('AwsIoT1Click', 'Aws Io T1 Click', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoT1Click
include('aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click')

' renders the element
AwsIoT1Click('AwsIoT1Click', 'Aws Io T1 Click', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoT1ClickCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoT1ClickCard
include('aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click')

' renders the element
AwsIoT1ClickCard('AwsIoT1ClickCard', 'Aws Io T1 Click Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoT1ClickCard
include('aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click')

' renders the element
AwsIoT1ClickCard('AwsIoT1ClickCard', 'Aws Io T1 Click Card', 'an optional description')
@enduml
```

## AwsIoT1ClickGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoT1ClickGroup
include('aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click')

' renders the element
AwsIoT1ClickGroup('AwsIoT1ClickGroup', 'Aws Io T1 Click Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoT1ClickGroup
include('aws-q2-2024/Architecture/InternetOfThings/AwsIoT1Click')

' renders the element
AwsIoT1ClickGroup('AwsIoT1ClickGroup', 'Aws Io T1 Click Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


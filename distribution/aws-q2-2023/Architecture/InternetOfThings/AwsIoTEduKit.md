# AwsIoTEduKit


```text
aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit
```

```text
include('aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit')
```



| Illustration | AwsIoTEduKit | AwsIoTEduKitCard | AwsIoTEduKitGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit.png) | ![illustration for AwsIoTEduKit](../../../aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit.Local.png) | ![illustration for AwsIoTEduKitCard](../../../aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKitCard.Local.png) | ![illustration for AwsIoTEduKitGroup](../../../aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKitGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTEduKitXs>`
- `<$AwsIoTEduKitSm>`
- `<$AwsIoTEduKitMd>`
- `<$AwsIoTEduKitLg>`





## AwsIoTEduKit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEduKit
include('aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit')

' renders the element
AwsIoTEduKit('AwsIoTEduKit', 'Aws Io T Edu Kit', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEduKit
include('aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit')

' renders the element
AwsIoTEduKit('AwsIoTEduKit', 'Aws Io T Edu Kit', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTEduKitCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEduKitCard
include('aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit')

' renders the element
AwsIoTEduKitCard('AwsIoTEduKitCard', 'Aws Io T Edu Kit Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEduKitCard
include('aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit')

' renders the element
AwsIoTEduKitCard('AwsIoTEduKitCard', 'Aws Io T Edu Kit Card', 'an optional description')
@enduml
```

## AwsIoTEduKitGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEduKitGroup
include('aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit')

' renders the element
AwsIoTEduKitGroup('AwsIoTEduKitGroup', 'Aws Io T Edu Kit Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEduKitGroup
include('aws-q2-2023/Architecture/InternetOfThings/AwsIoTEduKit')

' renders the element
AwsIoTEduKitGroup('AwsIoTEduKitGroup', 'Aws Io T Edu Kit Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


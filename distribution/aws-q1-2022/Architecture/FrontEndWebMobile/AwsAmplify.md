# AwsAmplify


```text
aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify
```

```text
include('aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify')
```



| Illustration | AwsAmplify | AwsAmplifyCard | AwsAmplifyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify.png) | ![illustration for AwsAmplify](../../../aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify.Local.png) | ![illustration for AwsAmplifyCard](../../../aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplifyCard.Local.png) | ![illustration for AwsAmplifyGroup](../../../aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplifyGroup.Local.png) |




## AwsAmplify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsAmplify
include('aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify')

' renders the element
AwsAmplify('AwsAmplify', 'Aws Amplify', 'an optional tech label', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsAmplify
include('aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify')

' renders the element
AwsAmplify('AwsAmplify', 'Aws Amplify', 'an optional tech label', 'an optional description')
@enduml
```

## AwsAmplifyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsAmplifyCard
include('aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify')

' renders the element
AwsAmplifyCard('AwsAmplifyCard', 'Aws Amplify Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsAmplifyCard
include('aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify')

' renders the element
AwsAmplifyCard('AwsAmplifyCard', 'Aws Amplify Card', 'an optional description')
@enduml
```

## AwsAmplifyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsAmplifyGroup
include('aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify')

' renders the element
AwsAmplifyGroup('AwsAmplifyGroup', 'Aws Amplify Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsAmplifyGroup
include('aws-q1-2022/Architecture/FrontEndWebMobile/AwsAmplify')

' renders the element
AwsAmplifyGroup('AwsAmplifyGroup', 'Aws Amplify Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsElementalMediaConvert


```text
aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert')
```



| Illustration | AwsElementalMediaConvert | AwsElementalMediaConvertCard | AwsElementalMediaConvertGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert.png) | ![illustration for AwsElementalMediaConvert](../../../aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert.Local.png) | ![illustration for AwsElementalMediaConvertCard](../../../aws-20210131/Architecture/MediaServices/AwsElementalMediaConvertCard.Local.png) | ![illustration for AwsElementalMediaConvertGroup](../../../aws-20210131/Architecture/MediaServices/AwsElementalMediaConvertGroup.Local.png) |




## AwsElementalMediaConvert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsElementalMediaConvert
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert')

' renders the element
AwsElementalMediaConvert('AwsElementalMediaConvert', 'Aws Elemental Media Convert', 'an optional tech label')
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

' loads the Item which embeds the element AwsElementalMediaConvert
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert')

' renders the element
AwsElementalMediaConvert('AwsElementalMediaConvert', 'Aws Elemental Media Convert', 'an optional tech label')
@enduml
```

## AwsElementalMediaConvertCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsElementalMediaConvertCard
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert')

' renders the element
AwsElementalMediaConvertCard('AwsElementalMediaConvertCard', 'Aws Elemental Media Convert Card', 'an optional description')
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

' loads the Item which embeds the element AwsElementalMediaConvertCard
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert')

' renders the element
AwsElementalMediaConvertCard('AwsElementalMediaConvertCard', 'Aws Elemental Media Convert Card', 'an optional description')
@enduml
```

## AwsElementalMediaConvertGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsElementalMediaConvertGroup
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert')

' renders the element
AwsElementalMediaConvertGroup('AwsElementalMediaConvertGroup', 'Aws Elemental Media Convert Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsElementalMediaConvertGroup
include('aws-20210131/Architecture/MediaServices/AwsElementalMediaConvert')

' renders the element
AwsElementalMediaConvertGroup('AwsElementalMediaConvertGroup', 'Aws Elemental Media Convert Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsCloud


```text
aws-20210131/Resource/GroupIcons/AwsCloud
```

```text
include('aws-20210131/Resource/GroupIcons/AwsCloud')
```



| Illustration | AwsCloud | AwsCloudCard | AwsCloudGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/GroupIcons/AwsCloud.png) | ![illustration for AwsCloud](../../../aws-20210131/Resource/GroupIcons/AwsCloud.Local.png) | ![illustration for AwsCloudCard](../../../aws-20210131/Resource/GroupIcons/AwsCloudCard.Local.png) | ![illustration for AwsCloudGroup](../../../aws-20210131/Resource/GroupIcons/AwsCloudGroup.Local.png) |




## AwsCloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloud
include('aws-20210131/Resource/GroupIcons/AwsCloud')

' renders the element
AwsCloud('AwsCloud', 'Aws Cloud', 'an optional tech label')
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

' loads the Item which embeds the element AwsCloud
include('aws-20210131/Resource/GroupIcons/AwsCloud')

' renders the element
AwsCloud('AwsCloud', 'Aws Cloud', 'an optional tech label')
@enduml
```

## AwsCloudCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudCard
include('aws-20210131/Resource/GroupIcons/AwsCloud')

' renders the element
AwsCloudCard('AwsCloudCard', 'Aws Cloud Card', 'an optional description')
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

' loads the Item which embeds the element AwsCloudCard
include('aws-20210131/Resource/GroupIcons/AwsCloud')

' renders the element
AwsCloudCard('AwsCloudCard', 'Aws Cloud Card', 'an optional description')
@enduml
```

## AwsCloudGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudGroup
include('aws-20210131/Resource/GroupIcons/AwsCloud')

' renders the element
AwsCloudGroup('AwsCloudGroup', 'Aws Cloud Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCloudGroup
include('aws-20210131/Resource/GroupIcons/AwsCloud')

' renders the element
AwsCloudGroup('AwsCloudGroup', 'Aws Cloud Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


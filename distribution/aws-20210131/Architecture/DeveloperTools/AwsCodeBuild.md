# AwsCodeBuild


```text
aws-20210131/Architecture/DeveloperTools/AwsCodeBuild
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')
```



| Illustration | AwsCodeBuild | AwsCodeBuildCard | AwsCodeBuildGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/DeveloperTools/AwsCodeBuild.png) | ![illustration for AwsCodeBuild](../../../aws-20210131/Architecture/DeveloperTools/AwsCodeBuild.Local.png) | ![illustration for AwsCodeBuildCard](../../../aws-20210131/Architecture/DeveloperTools/AwsCodeBuildCard.Local.png) | ![illustration for AwsCodeBuildGroup](../../../aws-20210131/Architecture/DeveloperTools/AwsCodeBuildGroup.Local.png) |




## AwsCodeBuild

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCodeBuild
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')

' renders the element
AwsCodeBuild('AwsCodeBuild', 'Aws Code Build', 'an optional tech label')
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

' loads the Item which embeds the element AwsCodeBuild
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')

' renders the element
AwsCodeBuild('AwsCodeBuild', 'Aws Code Build', 'an optional tech label')
@enduml
```

## AwsCodeBuildCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCodeBuildCard
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')

' renders the element
AwsCodeBuildCard('AwsCodeBuildCard', 'Aws Code Build Card', 'an optional description')
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

' loads the Item which embeds the element AwsCodeBuildCard
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')

' renders the element
AwsCodeBuildCard('AwsCodeBuildCard', 'Aws Code Build Card', 'an optional description')
@enduml
```

## AwsCodeBuildGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCodeBuildGroup
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')

' renders the element
AwsCodeBuildGroup('AwsCodeBuildGroup', 'Aws Code Build Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCodeBuildGroup
include('aws-20210131/Architecture/DeveloperTools/AwsCodeBuild')

' renders the element
AwsCodeBuildGroup('AwsCodeBuildGroup', 'Aws Code Build Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsCodeCommit


```text
aws-20210131/Architecture/DeveloperTools/AwsCodeCommit
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCodeCommit')
```



| Illustration | AwsCodeCommit | AwsCodeCommitCard | AwsCodeCommitGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/DeveloperTools/AwsCodeCommit.png) | ![illustration for AwsCodeCommit](../../../aws-20210131/Architecture/DeveloperTools/AwsCodeCommit.Local.png) | ![illustration for AwsCodeCommitCard](../../../aws-20210131/Architecture/DeveloperTools/AwsCodeCommitCard.Local.png) | ![illustration for AwsCodeCommitGroup](../../../aws-20210131/Architecture/DeveloperTools/AwsCodeCommitGroup.Local.png) |




## AwsCodeCommit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCodeCommit
include('aws-20210131/Architecture/DeveloperTools/AwsCodeCommit')

' renders the element
AwsCodeCommit('AwsCodeCommit', 'Aws Code Commit', 'an optional tech label')
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

' loads the Item which embeds the element AwsCodeCommit
include('aws-20210131/Architecture/DeveloperTools/AwsCodeCommit')

' renders the element
AwsCodeCommit('AwsCodeCommit', 'Aws Code Commit', 'an optional tech label')
@enduml
```

## AwsCodeCommitCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCodeCommitCard
include('aws-20210131/Architecture/DeveloperTools/AwsCodeCommit')

' renders the element
AwsCodeCommitCard('AwsCodeCommitCard', 'Aws Code Commit Card', 'an optional description')
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

' loads the Item which embeds the element AwsCodeCommitCard
include('aws-20210131/Architecture/DeveloperTools/AwsCodeCommit')

' renders the element
AwsCodeCommitCard('AwsCodeCommitCard', 'Aws Code Commit Card', 'an optional description')
@enduml
```

## AwsCodeCommitGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCodeCommitGroup
include('aws-20210131/Architecture/DeveloperTools/AwsCodeCommit')

' renders the element
AwsCodeCommitGroup('AwsCodeCommitGroup', 'Aws Code Commit Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCodeCommitGroup
include('aws-20210131/Architecture/DeveloperTools/AwsCodeCommit')

' renders the element
AwsCodeCommitGroup('AwsCodeCommitGroup', 'Aws Code Commit Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


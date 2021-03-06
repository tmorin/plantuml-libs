# AwsCommandLineInterface


```text
aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')
```



| Illustration | AwsCommandLineInterface | AwsCommandLineInterfaceCard | AwsCommandLineInterfaceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface.png) | ![illustration for AwsCommandLineInterface](../../../aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface.Local.png) | ![illustration for AwsCommandLineInterfaceCard](../../../aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterfaceCard.Local.png) | ![illustration for AwsCommandLineInterfaceGroup](../../../aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterfaceGroup.Local.png) |




## AwsCommandLineInterface

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCommandLineInterface
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')

' renders the element
AwsCommandLineInterface('AwsCommandLineInterface', 'Aws Command Line Interface', 'an optional tech label')
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

' loads the Item which embeds the element AwsCommandLineInterface
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')

' renders the element
AwsCommandLineInterface('AwsCommandLineInterface', 'Aws Command Line Interface', 'an optional tech label')
@enduml
```

## AwsCommandLineInterfaceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCommandLineInterfaceCard
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')

' renders the element
AwsCommandLineInterfaceCard('AwsCommandLineInterfaceCard', 'Aws Command Line Interface Card', 'an optional description')
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

' loads the Item which embeds the element AwsCommandLineInterfaceCard
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')

' renders the element
AwsCommandLineInterfaceCard('AwsCommandLineInterfaceCard', 'Aws Command Line Interface Card', 'an optional description')
@enduml
```

## AwsCommandLineInterfaceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCommandLineInterfaceGroup
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')

' renders the element
AwsCommandLineInterfaceGroup('AwsCommandLineInterfaceGroup', 'Aws Command Line Interface Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCommandLineInterfaceGroup
include('aws-20210131/Architecture/DeveloperTools/AwsCommandLineInterface')

' renders the element
AwsCommandLineInterfaceGroup('AwsCommandLineInterfaceGroup', 'Aws Command Line Interface Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsCloud9


```text
aws-20210131/Architecture/DeveloperTools/AwsCloud9
```

```text
include('aws-20210131/Architecture/DeveloperTools/AwsCloud9')
```



| Illustration | AwsCloud9 | AwsCloud9Card | AwsCloud9Group |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/DeveloperTools/AwsCloud9.png) | ![illustration for AwsCloud9](../../../aws-20210131/Architecture/DeveloperTools/AwsCloud9.Local.png) | ![illustration for AwsCloud9Card](../../../aws-20210131/Architecture/DeveloperTools/AwsCloud9Card.Local.png) | ![illustration for AwsCloud9Group](../../../aws-20210131/Architecture/DeveloperTools/AwsCloud9Group.Local.png) |




## AwsCloud9

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloud9
include('aws-20210131/Architecture/DeveloperTools/AwsCloud9')

' renders the element
AwsCloud9('AwsCloud9', 'Aws Cloud9', 'an optional tech label')
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

' loads the Item which embeds the element AwsCloud9
include('aws-20210131/Architecture/DeveloperTools/AwsCloud9')

' renders the element
AwsCloud9('AwsCloud9', 'Aws Cloud9', 'an optional tech label')
@enduml
```

## AwsCloud9Card

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloud9Card
include('aws-20210131/Architecture/DeveloperTools/AwsCloud9')

' renders the element
AwsCloud9Card('AwsCloud9Card', 'Aws Cloud9 Card', 'an optional description')
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

' loads the Item which embeds the element AwsCloud9Card
include('aws-20210131/Architecture/DeveloperTools/AwsCloud9')

' renders the element
AwsCloud9Card('AwsCloud9Card', 'Aws Cloud9 Card', 'an optional description')
@enduml
```

## AwsCloud9Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloud9Group
include('aws-20210131/Architecture/DeveloperTools/AwsCloud9')

' renders the element
AwsCloud9Group('AwsCloud9Group', 'Aws Cloud9 Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCloud9Group
include('aws-20210131/Architecture/DeveloperTools/AwsCloud9')

' renders the element
AwsCloud9Group('AwsCloud9Group', 'Aws Cloud9 Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


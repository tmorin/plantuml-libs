# AwsIq


```text
aws-20210131/Architecture/CustomerEnablement/AwsIq
```

```text
include('aws-20210131/Architecture/CustomerEnablement/AwsIq')
```



| Illustration | AwsIq | AwsIqCard | AwsIqGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/CustomerEnablement/AwsIq.png) | ![illustration for AwsIq](../../../aws-20210131/Architecture/CustomerEnablement/AwsIq.Local.png) | ![illustration for AwsIqCard](../../../aws-20210131/Architecture/CustomerEnablement/AwsIqCard.Local.png) | ![illustration for AwsIqGroup](../../../aws-20210131/Architecture/CustomerEnablement/AwsIqGroup.Local.png) |




## AwsIq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsIq
include('aws-20210131/Architecture/CustomerEnablement/AwsIq')

' renders the element
AwsIq('AwsIq', 'Aws Iq', 'an optional tech label')
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

' loads the Item which embeds the element AwsIq
include('aws-20210131/Architecture/CustomerEnablement/AwsIq')

' renders the element
AwsIq('AwsIq', 'Aws Iq', 'an optional tech label')
@enduml
```

## AwsIqCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsIqCard
include('aws-20210131/Architecture/CustomerEnablement/AwsIq')

' renders the element
AwsIqCard('AwsIqCard', 'Aws Iq Card', 'an optional description')
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

' loads the Item which embeds the element AwsIqCard
include('aws-20210131/Architecture/CustomerEnablement/AwsIq')

' renders the element
AwsIqCard('AwsIqCard', 'Aws Iq Card', 'an optional description')
@enduml
```

## AwsIqGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsIqGroup
include('aws-20210131/Architecture/CustomerEnablement/AwsIq')

' renders the element
AwsIqGroup('AwsIqGroup', 'Aws Iq Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIqGroup
include('aws-20210131/Architecture/CustomerEnablement/AwsIq')

' renders the element
AwsIqGroup('AwsIqGroup', 'Aws Iq Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# AwsElementalConductor


```text
aws-20210131/Architecture/MediaServices/AwsElementalConductor
```

```text
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')
```



| Illustration | AwsElementalConductor | AwsElementalConductorCard | AwsElementalConductorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MediaServices/AwsElementalConductor.png) | ![illustration for AwsElementalConductor](../../../aws-20210131/Architecture/MediaServices/AwsElementalConductor.Local.png) | ![illustration for AwsElementalConductorCard](../../../aws-20210131/Architecture/MediaServices/AwsElementalConductorCard.Local.png) | ![illustration for AwsElementalConductorGroup](../../../aws-20210131/Architecture/MediaServices/AwsElementalConductorGroup.Local.png) |




## AwsElementalConductor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsElementalConductor
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')

' renders the element
AwsElementalConductor('AwsElementalConductor', 'Aws Elemental Conductor', 'an optional tech label')
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

' loads the Item which embeds the element AwsElementalConductor
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')

' renders the element
AwsElementalConductor('AwsElementalConductor', 'Aws Elemental Conductor', 'an optional tech label')
@enduml
```

## AwsElementalConductorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsElementalConductorCard
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')

' renders the element
AwsElementalConductorCard('AwsElementalConductorCard', 'Aws Elemental Conductor Card', 'an optional description')
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

' loads the Item which embeds the element AwsElementalConductorCard
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')

' renders the element
AwsElementalConductorCard('AwsElementalConductorCard', 'Aws Elemental Conductor Card', 'an optional description')
@enduml
```

## AwsElementalConductorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsElementalConductorGroup
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')

' renders the element
AwsElementalConductorGroup('AwsElementalConductorGroup', 'Aws Elemental Conductor Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsElementalConductorGroup
include('aws-20210131/Architecture/MediaServices/AwsElementalConductor')

' renders the element
AwsElementalConductorGroup('AwsElementalConductorGroup', 'Aws Elemental Conductor Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


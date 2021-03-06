# EndUserComputing


```text
aws-20210131/Category/EndUserComputing
```

```text
include('aws-20210131/Category/EndUserComputing')
```



| Illustration | EndUserComputing | EndUserComputingCard | EndUserComputingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Category/EndUserComputing.png) | ![illustration for EndUserComputing](../../aws-20210131/Category/EndUserComputing.Local.png) | ![illustration for EndUserComputingCard](../../aws-20210131/Category/EndUserComputingCard.Local.png) | ![illustration for EndUserComputingGroup](../../aws-20210131/Category/EndUserComputingGroup.Local.png) |




## EndUserComputing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element EndUserComputing
include('aws-20210131/Category/EndUserComputing')

' renders the element
EndUserComputing('EndUserComputing', 'End User Computing', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element EndUserComputing
include('aws-20210131/Category/EndUserComputing')

' renders the element
EndUserComputing('EndUserComputing', 'End User Computing', 'an optional tech label')
@enduml
```

## EndUserComputingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element EndUserComputingCard
include('aws-20210131/Category/EndUserComputing')

' renders the element
EndUserComputingCard('EndUserComputingCard', 'End User Computing Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element EndUserComputingCard
include('aws-20210131/Category/EndUserComputing')

' renders the element
EndUserComputingCard('EndUserComputingCard', 'End User Computing Card', 'an optional description')
@enduml
```

## EndUserComputingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element EndUserComputingGroup
include('aws-20210131/Category/EndUserComputing')

' renders the element
EndUserComputingGroup('EndUserComputingGroup', 'End User Computing Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element EndUserComputingGroup
include('aws-20210131/Category/EndUserComputing')

' renders the element
EndUserComputingGroup('EndUserComputingGroup', 'End User Computing Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


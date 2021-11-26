# RedHatOpenShift


```text
aws-20210730/Architecture/Containers/RedHatOpenShift
```

```text
include('aws-20210730/Architecture/Containers/RedHatOpenShift')
```



| Illustration | RedHatOpenShift | RedHatOpenShiftCard | RedHatOpenShiftGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Containers/RedHatOpenShift.png) | ![illustration for RedHatOpenShift](../../../aws-20210730/Architecture/Containers/RedHatOpenShift.Local.png) | ![illustration for RedHatOpenShiftCard](../../../aws-20210730/Architecture/Containers/RedHatOpenShiftCard.Local.png) | ![illustration for RedHatOpenShiftGroup](../../../aws-20210730/Architecture/Containers/RedHatOpenShiftGroup.Local.png) |




## RedHatOpenShift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element RedHatOpenShift
include('aws-20210730/Architecture/Containers/RedHatOpenShift')

' renders the element
RedHatOpenShift('RedHatOpenShift', 'Red Hat Open Shift', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element RedHatOpenShift
include('aws-20210730/Architecture/Containers/RedHatOpenShift')

' renders the element
RedHatOpenShift('RedHatOpenShift', 'Red Hat Open Shift', 'an optional tech label')
@enduml
```

## RedHatOpenShiftCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element RedHatOpenShiftCard
include('aws-20210730/Architecture/Containers/RedHatOpenShift')

' renders the element
RedHatOpenShiftCard('RedHatOpenShiftCard', 'Red Hat Open Shift Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element RedHatOpenShiftCard
include('aws-20210730/Architecture/Containers/RedHatOpenShift')

' renders the element
RedHatOpenShiftCard('RedHatOpenShiftCard', 'Red Hat Open Shift Card', 'an optional description')
@enduml
```

## RedHatOpenShiftGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element RedHatOpenShiftGroup
include('aws-20210730/Architecture/Containers/RedHatOpenShift')

' renders the element
RedHatOpenShiftGroup('RedHatOpenShiftGroup', 'Red Hat Open Shift Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element RedHatOpenShiftGroup
include('aws-20210730/Architecture/Containers/RedHatOpenShift')

' renders the element
RedHatOpenShiftGroup('RedHatOpenShiftGroup', 'Red Hat Open Shift Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


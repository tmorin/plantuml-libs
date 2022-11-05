# Recover


```text
aws-q3-2022/Resource/GeneralIcons/Recover
```

```text
include('aws-q3-2022/Resource/GeneralIcons/Recover')
```



| Illustration | Recover | RecoverCard | RecoverGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/GeneralIcons/Recover.png) | ![illustration for Recover](../../../aws-q3-2022/Resource/GeneralIcons/Recover.Local.png) | ![illustration for RecoverCard](../../../aws-q3-2022/Resource/GeneralIcons/RecoverCard.Local.png) | ![illustration for RecoverGroup](../../../aws-q3-2022/Resource/GeneralIcons/RecoverGroup.Local.png) |




## Recover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element Recover
include('aws-q3-2022/Resource/GeneralIcons/Recover')

' renders the element
Recover('Recover', 'Recover', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element Recover
include('aws-q3-2022/Resource/GeneralIcons/Recover')

' renders the element
Recover('Recover', 'Recover', 'an optional tech label', 'an optional description')
@enduml
```

## RecoverCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element RecoverCard
include('aws-q3-2022/Resource/GeneralIcons/Recover')

' renders the element
RecoverCard('RecoverCard', 'Recover Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element RecoverCard
include('aws-q3-2022/Resource/GeneralIcons/Recover')

' renders the element
RecoverCard('RecoverCard', 'Recover Card', 'an optional description')
@enduml
```

## RecoverGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element RecoverGroup
include('aws-q3-2022/Resource/GeneralIcons/Recover')

' renders the element
RecoverGroup('RecoverGroup', 'Recover Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element RecoverGroup
include('aws-q3-2022/Resource/GeneralIcons/Recover')

' renders the element
RecoverGroup('RecoverGroup', 'Recover Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


# Stackdriver


```text
gcp/Item/ManagementTools/Stackdriver
```

```text
include('gcp/Item/ManagementTools/Stackdriver')
```



| Illustration | Stackdriver | StackdriverCard | StackdriverGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/ManagementTools/Stackdriver.png) | ![illustration for Stackdriver](../../../gcp/Item/ManagementTools/Stackdriver.Local.png) | ![illustration for StackdriverCard](../../../gcp/Item/ManagementTools/StackdriverCard.Local.png) | ![illustration for StackdriverGroup](../../../gcp/Item/ManagementTools/StackdriverGroup.Local.png) |




## Stackdriver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Stackdriver
include('gcp/Item/ManagementTools/Stackdriver')

' renders the element
Stackdriver('Stackdriver', 'Stackdriver', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element Stackdriver
include('gcp/Item/ManagementTools/Stackdriver')

' renders the element
Stackdriver('Stackdriver', 'Stackdriver', 'an optional tech label')
@enduml
```

## StackdriverCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element StackdriverCard
include('gcp/Item/ManagementTools/Stackdriver')

' renders the element
StackdriverCard('StackdriverCard', 'Stackdriver Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element StackdriverCard
include('gcp/Item/ManagementTools/Stackdriver')

' renders the element
StackdriverCard('StackdriverCard', 'Stackdriver Card', 'an optional description')
@enduml
```

## StackdriverGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element StackdriverGroup
include('gcp/Item/ManagementTools/Stackdriver')

' renders the element
StackdriverGroup('StackdriverGroup', 'Stackdriver Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element StackdriverGroup
include('gcp/Item/ManagementTools/Stackdriver')

' renders the element
StackdriverGroup('StackdriverGroup', 'Stackdriver Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


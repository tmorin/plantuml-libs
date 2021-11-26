# ToolsForPowershell


```text
gcp/Item/DeveloperTools/ToolsForPowershell
```

```text
include('gcp/Item/DeveloperTools/ToolsForPowershell')
```



| Illustration | ToolsForPowershell | ToolsForPowershellCard | ToolsForPowershellGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/DeveloperTools/ToolsForPowershell.png) | ![illustration for ToolsForPowershell](../../../gcp/Item/DeveloperTools/ToolsForPowershell.Local.png) | ![illustration for ToolsForPowershellCard](../../../gcp/Item/DeveloperTools/ToolsForPowershellCard.Local.png) | ![illustration for ToolsForPowershellGroup](../../../gcp/Item/DeveloperTools/ToolsForPowershellGroup.Local.png) |




## ToolsForPowershell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ToolsForPowershell
include('gcp/Item/DeveloperTools/ToolsForPowershell')

' renders the element
ToolsForPowershell('ToolsForPowershell', 'Tools For Powershell', 'an optional tech label')
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

' loads the Item which embeds the element ToolsForPowershell
include('gcp/Item/DeveloperTools/ToolsForPowershell')

' renders the element
ToolsForPowershell('ToolsForPowershell', 'Tools For Powershell', 'an optional tech label')
@enduml
```

## ToolsForPowershellCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ToolsForPowershellCard
include('gcp/Item/DeveloperTools/ToolsForPowershell')

' renders the element
ToolsForPowershellCard('ToolsForPowershellCard', 'Tools For Powershell Card', 'an optional description')
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

' loads the Item which embeds the element ToolsForPowershellCard
include('gcp/Item/DeveloperTools/ToolsForPowershell')

' renders the element
ToolsForPowershellCard('ToolsForPowershellCard', 'Tools For Powershell Card', 'an optional description')
@enduml
```

## ToolsForPowershellGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ToolsForPowershellGroup
include('gcp/Item/DeveloperTools/ToolsForPowershell')

' renders the element
ToolsForPowershellGroup('ToolsForPowershellGroup', 'Tools For Powershell Group', 'an optional tech label') {
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

' loads the Item which embeds the element ToolsForPowershellGroup
include('gcp/Item/DeveloperTools/ToolsForPowershell')

' renders the element
ToolsForPowershellGroup('ToolsForPowershellGroup', 'Tools For Powershell Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


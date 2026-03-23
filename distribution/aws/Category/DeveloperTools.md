# DeveloperTools


```text
aws/Category/DeveloperTools
```

```text
include('aws/Category/DeveloperTools')
```



| Illustration | DeveloperTools | DeveloperToolsCard | DeveloperToolsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws/Category/DeveloperTools.png) | ![illustration for DeveloperTools](../../aws/Category/DeveloperTools.Local.png) | ![illustration for DeveloperToolsCard](../../aws/Category/DeveloperToolsCard.Local.png) | ![illustration for DeveloperToolsGroup](../../aws/Category/DeveloperToolsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeveloperToolsXs>`
- `<$DeveloperToolsSm>`
- `<$DeveloperToolsMd>`
- `<$DeveloperToolsLg>`





## DeveloperTools

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element DeveloperTools
include('aws/Category/DeveloperTools')

' renders the element
DeveloperTools('DeveloperTools', 'Developer Tools', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element DeveloperTools
include('aws/Category/DeveloperTools')

' renders the element
DeveloperTools('DeveloperTools', 'Developer Tools', 'an optional tech label', 'an optional description')
@enduml
```

## DeveloperToolsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element DeveloperToolsCard
include('aws/Category/DeveloperTools')

' renders the element
DeveloperToolsCard('DeveloperToolsCard', 'Developer Tools Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element DeveloperToolsCard
include('aws/Category/DeveloperTools')

' renders the element
DeveloperToolsCard('DeveloperToolsCard', 'Developer Tools Card', 'an optional description')
@enduml
```

## DeveloperToolsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element DeveloperToolsGroup
include('aws/Category/DeveloperTools')

' renders the element
DeveloperToolsGroup('DeveloperToolsGroup', 'Developer Tools Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element DeveloperToolsGroup
include('aws/Category/DeveloperTools')

' renders the element
DeveloperToolsGroup('DeveloperToolsGroup', 'Developer Tools Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```


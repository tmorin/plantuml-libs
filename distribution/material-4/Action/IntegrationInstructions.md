# IntegrationInstructions


```text
material-4/Action/IntegrationInstructions
```

```text
include('material-4/Action/IntegrationInstructions')
```



| Illustration | IntegrationInstructions |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/IntegrationInstructions.png) | ![illustration for IntegrationInstructions](../../material-4/Action/IntegrationInstructions.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IntegrationInstructionsXs>`
- `<$IntegrationInstructionsSm>`
- `<$IntegrationInstructionsMd>`
- `<$IntegrationInstructionsLg>`





## IntegrationInstructions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element IntegrationInstructions
include('material-4/Action/IntegrationInstructions')

' renders the element
IntegrationInstructions('IntegrationInstructions', 'Integration Instructions', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element IntegrationInstructions
include('material-4/Action/IntegrationInstructions')

' renders the element
IntegrationInstructions('IntegrationInstructions', 'Integration Instructions', 'an optional tech label', 'an optional description')
@enduml
```


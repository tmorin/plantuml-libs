# PowerSettingsNew


```text
material-4/Action/PowerSettingsNew
```

```text
include('material-4/Action/PowerSettingsNew')
```



| Illustration | PowerSettingsNew |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PowerSettingsNew.png) | ![illustration for PowerSettingsNew](../../material-4/Action/PowerSettingsNew.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PowerSettingsNewXs>`
- `<$PowerSettingsNewSm>`
- `<$PowerSettingsNewMd>`
- `<$PowerSettingsNewLg>`





## PowerSettingsNew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PowerSettingsNew
include('material-4/Action/PowerSettingsNew')

' renders the element
PowerSettingsNew('PowerSettingsNew', 'Power Settings New', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PowerSettingsNew
include('material-4/Action/PowerSettingsNew')

' renders the element
PowerSettingsNew('PowerSettingsNew', 'Power Settings New', 'an optional tech label', 'an optional description')
@enduml
```


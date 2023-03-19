# PersonAddDisabled


```text
material-4/Communication/PersonAddDisabled
```

```text
include('material-4/Communication/PersonAddDisabled')
```



| Illustration | PersonAddDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/PersonAddDisabled.png) | ![illustration for PersonAddDisabled](../../material-4/Communication/PersonAddDisabled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonAddDisabledXs>`
- `<$PersonAddDisabledSm>`
- `<$PersonAddDisabledMd>`
- `<$PersonAddDisabledLg>`





## PersonAddDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PersonAddDisabled
include('material-4/Communication/PersonAddDisabled')

' renders the element
PersonAddDisabled('PersonAddDisabled', 'Person Add Disabled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonAddDisabled
include('material-4/Communication/PersonAddDisabled')

' renders the element
PersonAddDisabled('PersonAddDisabled', 'Person Add Disabled', 'an optional tech label', 'an optional description')
@enduml
```


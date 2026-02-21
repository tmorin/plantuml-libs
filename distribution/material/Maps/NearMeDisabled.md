# NearMeDisabled


```text
material/Maps/NearMeDisabled
```

```text
include('material/Maps/NearMeDisabled')
```



| Illustration | NearMeDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/NearMeDisabled.png) | ![illustration for NearMeDisabled](../../material/Maps/NearMeDisabled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NearMeDisabledXs>`
- `<$NearMeDisabledSm>`
- `<$NearMeDisabledMd>`
- `<$NearMeDisabledLg>`





## NearMeDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NearMeDisabled
include('material/Maps/NearMeDisabled')

' renders the element
NearMeDisabled('NearMeDisabled', 'Near Me Disabled', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element NearMeDisabled
include('material/Maps/NearMeDisabled')

' renders the element
NearMeDisabled('NearMeDisabled', 'Near Me Disabled', 'an optional tech label', 'an optional description')
@enduml
```


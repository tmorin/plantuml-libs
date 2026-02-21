# OutlinedFlag


```text
material/Content/OutlinedFlag
```

```text
include('material/Content/OutlinedFlag')
```



| Illustration | OutlinedFlag |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/OutlinedFlag.png) | ![illustration for OutlinedFlag](../../material/Content/OutlinedFlag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OutlinedFlagXs>`
- `<$OutlinedFlagSm>`
- `<$OutlinedFlagMd>`
- `<$OutlinedFlagLg>`





## OutlinedFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element OutlinedFlag
include('material/Content/OutlinedFlag')

' renders the element
OutlinedFlag('OutlinedFlag', 'Outlined Flag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element OutlinedFlag
include('material/Content/OutlinedFlag')

' renders the element
OutlinedFlag('OutlinedFlag', 'Outlined Flag', 'an optional tech label', 'an optional description')
@enduml
```


# Shield


```text
material/Content/Shield
```

```text
include('material/Content/Shield')
```



| Illustration | Shield |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Shield.png) | ![illustration for Shield](../../material/Content/Shield.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShieldXs>`
- `<$ShieldSm>`
- `<$ShieldMd>`
- `<$ShieldLg>`





## Shield

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Shield
include('material/Content/Shield')

' renders the element
Shield('Shield', 'Shield', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shield
include('material/Content/Shield')

' renders the element
Shield('Shield', 'Shield', 'an optional tech label', 'an optional description')
@enduml
```


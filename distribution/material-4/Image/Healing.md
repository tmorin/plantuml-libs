# Healing


```text
material-4/Image/Healing
```

```text
include('material-4/Image/Healing')
```



| Illustration | Healing |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Healing.png) | ![illustration for Healing](../../material-4/Image/Healing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HealingXs>`
- `<$HealingSm>`
- `<$HealingMd>`
- `<$HealingLg>`





## Healing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Healing
include('material-4/Image/Healing')

' renders the element
Healing('Healing', 'Healing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Healing
include('material-4/Image/Healing')

' renders the element
Healing('Healing', 'Healing', 'an optional tech label', 'an optional description')
@enduml
```


# ElectricMoped


```text
material-4/Maps/ElectricMoped
```

```text
include('material-4/Maps/ElectricMoped')
```



| Illustration | ElectricMoped |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/ElectricMoped.png) | ![illustration for ElectricMoped](../../material-4/Maps/ElectricMoped.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElectricMopedXs>`
- `<$ElectricMopedSm>`
- `<$ElectricMopedMd>`
- `<$ElectricMopedLg>`





## ElectricMoped

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ElectricMoped
include('material-4/Maps/ElectricMoped')

' renders the element
ElectricMoped('ElectricMoped', 'Electric Moped', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ElectricMoped
include('material-4/Maps/ElectricMoped')

' renders the element
ElectricMoped('ElectricMoped', 'Electric Moped', 'an optional tech label', 'an optional description')
@enduml
```


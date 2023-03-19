# AdUnits


```text
material-4/Device/AdUnits
```

```text
include('material-4/Device/AdUnits')
```



| Illustration | AdUnits |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/AdUnits.png) | ![illustration for AdUnits](../../material-4/Device/AdUnits.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdUnitsXs>`
- `<$AdUnitsSm>`
- `<$AdUnitsMd>`
- `<$AdUnitsLg>`





## AdUnits

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AdUnits
include('material-4/Device/AdUnits')

' renders the element
AdUnits('AdUnits', 'Ad Units', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AdUnits
include('material-4/Device/AdUnits')

' renders the element
AdUnits('AdUnits', 'Ad Units', 'an optional tech label', 'an optional description')
@enduml
```


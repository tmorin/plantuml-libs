# Hvac


```text
material/Maps/Hvac
```

```text
include('material/Maps/Hvac')
```



| Illustration | Hvac |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Hvac.png) | ![illustration for Hvac](../../material/Maps/Hvac.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HvacXs>`
- `<$HvacSm>`
- `<$HvacMd>`
- `<$HvacLg>`





## Hvac

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Hvac
include('material/Maps/Hvac')

' renders the element
Hvac('Hvac', 'Hvac', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hvac
include('material/Maps/Hvac')

' renders the element
Hvac('Hvac', 'Hvac', 'an optional tech label', 'an optional description')
@enduml
```


# DollyFlatbed


```text
fontawesome/Solid/DollyFlatbed
```

```text
include('fontawesome/Solid/DollyFlatbed')
```



| Illustration | DollyFlatbed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DollyFlatbed.png) | ![illustration for DollyFlatbed](../../fontawesome/Solid/DollyFlatbed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DollyFlatbedXs>`
- `<$DollyFlatbedSm>`
- `<$DollyFlatbedMd>`
- `<$DollyFlatbedLg>`





## DollyFlatbed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DollyFlatbed
include('fontawesome/Solid/DollyFlatbed')

' renders the element
DollyFlatbed('DollyFlatbed', 'Dolly Flatbed', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element DollyFlatbed
include('fontawesome/Solid/DollyFlatbed')

' renders the element
DollyFlatbed('DollyFlatbed', 'Dolly Flatbed', 'an optional tech label', 'an optional description')
@enduml
```


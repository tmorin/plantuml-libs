# ArrowsV


```text
fontawesome/Solid/ArrowsV
```

```text
include('fontawesome/Solid/ArrowsV')
```



| Illustration | ArrowsV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsV.png) | ![illustration for ArrowsV](../../fontawesome/Solid/ArrowsV.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsVXs>`
- `<$ArrowsVSm>`
- `<$ArrowsVMd>`
- `<$ArrowsVLg>`





## ArrowsV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsV
include('fontawesome/Solid/ArrowsV')

' renders the element
ArrowsV('ArrowsV', 'Arrows V', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsV
include('fontawesome/Solid/ArrowsV')

' renders the element
ArrowsV('ArrowsV', 'Arrows V', 'an optional tech label', 'an optional description')
@enduml
```


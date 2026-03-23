# ArrowsAltV


```text
fontawesome/Solid/ArrowsAltV
```

```text
include('fontawesome/Solid/ArrowsAltV')
```



| Illustration | ArrowsAltV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsAltV.png) | ![illustration for ArrowsAltV](../../fontawesome/Solid/ArrowsAltV.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsAltVXs>`
- `<$ArrowsAltVSm>`
- `<$ArrowsAltVMd>`
- `<$ArrowsAltVLg>`





## ArrowsAltV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsAltV
include('fontawesome/Solid/ArrowsAltV')

' renders the element
ArrowsAltV('ArrowsAltV', 'Arrows Alt V', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsAltV
include('fontawesome/Solid/ArrowsAltV')

' renders the element
ArrowsAltV('ArrowsAltV', 'Arrows Alt V', 'an optional tech label', 'an optional description')
@enduml
```


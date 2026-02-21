# Clover


```text
fontawesome/Solid/Clover
```

```text
include('fontawesome/Solid/Clover')
```



| Illustration | Clover |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Clover.png) | ![illustration for Clover](../../fontawesome/Solid/Clover.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloverXs>`
- `<$CloverSm>`
- `<$CloverMd>`
- `<$CloverLg>`





## Clover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Clover
include('fontawesome/Solid/Clover')

' renders the element
Clover('Clover', 'Clover', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clover
include('fontawesome/Solid/Clover')

' renders the element
Clover('Clover', 'Clover', 'an optional tech label', 'an optional description')
@enduml
```


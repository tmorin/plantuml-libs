# DAndD


```text
fontawesome/Brands/DAndD
```

```text
include('fontawesome/Brands/DAndD')
```



| Illustration | DAndD |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/DAndD.png) | ![illustration for DAndD](../../fontawesome/Brands/DAndD.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DAndDXs>`
- `<$DAndDSm>`
- `<$DAndDMd>`
- `<$DAndDLg>`





## DAndD

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DAndD
include('fontawesome/Brands/DAndD')

' renders the element
DAndD('DAndD', 'D And D', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DAndD
include('fontawesome/Brands/DAndD')

' renders the element
DAndD('DAndD', 'D And D', 'an optional tech label', 'an optional description')
@enduml
```


# ScrewdriverWrench


```text
fontawesome/Solid/ScrewdriverWrench
```

```text
include('fontawesome/Solid/ScrewdriverWrench')
```



| Illustration | ScrewdriverWrench |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ScrewdriverWrench.png) | ![illustration for ScrewdriverWrench](../../fontawesome/Solid/ScrewdriverWrench.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScrewdriverWrenchXs>`
- `<$ScrewdriverWrenchSm>`
- `<$ScrewdriverWrenchMd>`
- `<$ScrewdriverWrenchLg>`





## ScrewdriverWrench

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ScrewdriverWrench
include('fontawesome/Solid/ScrewdriverWrench')

' renders the element
ScrewdriverWrench('ScrewdriverWrench', 'Screwdriver Wrench', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ScrewdriverWrench
include('fontawesome/Solid/ScrewdriverWrench')

' renders the element
ScrewdriverWrench('ScrewdriverWrench', 'Screwdriver Wrench', 'an optional tech label', 'an optional description')
@enduml
```


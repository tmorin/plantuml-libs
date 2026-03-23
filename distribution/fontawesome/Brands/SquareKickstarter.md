# SquareKickstarter


```text
fontawesome/Brands/SquareKickstarter
```

```text
include('fontawesome/Brands/SquareKickstarter')
```



| Illustration | SquareKickstarter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareKickstarter.png) | ![illustration for SquareKickstarter](../../fontawesome/Brands/SquareKickstarter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareKickstarterXs>`
- `<$SquareKickstarterSm>`
- `<$SquareKickstarterMd>`
- `<$SquareKickstarterLg>`





## SquareKickstarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareKickstarter
include('fontawesome/Brands/SquareKickstarter')

' renders the element
SquareKickstarter('SquareKickstarter', 'Square Kickstarter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareKickstarter
include('fontawesome/Brands/SquareKickstarter')

' renders the element
SquareKickstarter('SquareKickstarter', 'Square Kickstarter', 'an optional tech label', 'an optional description')
@enduml
```


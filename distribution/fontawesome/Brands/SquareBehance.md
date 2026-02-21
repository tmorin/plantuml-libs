# SquareBehance


```text
fontawesome/Brands/SquareBehance
```

```text
include('fontawesome/Brands/SquareBehance')
```



| Illustration | SquareBehance |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareBehance.png) | ![illustration for SquareBehance](../../fontawesome/Brands/SquareBehance.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareBehanceXs>`
- `<$SquareBehanceSm>`
- `<$SquareBehanceMd>`
- `<$SquareBehanceLg>`





## SquareBehance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareBehance
include('fontawesome/Brands/SquareBehance')

' renders the element
SquareBehance('SquareBehance', 'Square Behance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareBehance
include('fontawesome/Brands/SquareBehance')

' renders the element
SquareBehance('SquareBehance', 'Square Behance', 'an optional tech label', 'an optional description')
@enduml
```


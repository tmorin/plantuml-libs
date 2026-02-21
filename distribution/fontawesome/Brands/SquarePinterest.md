# SquarePinterest


```text
fontawesome/Brands/SquarePinterest
```

```text
include('fontawesome/Brands/SquarePinterest')
```



| Illustration | SquarePinterest |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquarePinterest.png) | ![illustration for SquarePinterest](../../fontawesome/Brands/SquarePinterest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquarePinterestXs>`
- `<$SquarePinterestSm>`
- `<$SquarePinterestMd>`
- `<$SquarePinterestLg>`





## SquarePinterest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquarePinterest
include('fontawesome/Brands/SquarePinterest')

' renders the element
SquarePinterest('SquarePinterest', 'Square Pinterest', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquarePinterest
include('fontawesome/Brands/SquarePinterest')

' renders the element
SquarePinterest('SquarePinterest', 'Square Pinterest', 'an optional tech label', 'an optional description')
@enduml
```


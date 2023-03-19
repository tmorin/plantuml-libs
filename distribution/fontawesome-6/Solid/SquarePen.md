# SquarePen


```text
fontawesome-6/Solid/SquarePen
```

```text
include('fontawesome-6/Solid/SquarePen')
```



| Illustration | SquarePen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquarePen.png) | ![illustration for SquarePen](../../fontawesome-6/Solid/SquarePen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquarePenXs>`
- `<$SquarePenSm>`
- `<$SquarePenMd>`
- `<$SquarePenLg>`





## SquarePen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquarePen
include('fontawesome-6/Solid/SquarePen')

' renders the element
SquarePen('SquarePen', 'Square Pen', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquarePen
include('fontawesome-6/Solid/SquarePen')

' renders the element
SquarePen('SquarePen', 'Square Pen', 'an optional tech label', 'an optional description')
@enduml
```


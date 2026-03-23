# SquareBinary


```text
fontawesome/Solid/SquareBinary
```

```text
include('fontawesome/Solid/SquareBinary')
```



| Illustration | SquareBinary |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SquareBinary.png) | ![illustration for SquareBinary](../../fontawesome/Solid/SquareBinary.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareBinaryXs>`
- `<$SquareBinarySm>`
- `<$SquareBinaryMd>`
- `<$SquareBinaryLg>`





## SquareBinary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareBinary
include('fontawesome/Solid/SquareBinary')

' renders the element
SquareBinary('SquareBinary', 'Square Binary', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareBinary
include('fontawesome/Solid/SquareBinary')

' renders the element
SquareBinary('SquareBinary', 'Square Binary', 'an optional tech label', 'an optional description')
@enduml
```


# ShoePrints


```text
fontawesome/Solid/ShoePrints
```

```text
include('fontawesome/Solid/ShoePrints')
```



| Illustration | ShoePrints |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShoePrints.png) | ![illustration for ShoePrints](../../fontawesome/Solid/ShoePrints.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShoePrintsXs>`
- `<$ShoePrintsSm>`
- `<$ShoePrintsMd>`
- `<$ShoePrintsLg>`





## ShoePrints

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShoePrints
include('fontawesome/Solid/ShoePrints')

' renders the element
ShoePrints('ShoePrints', 'Shoe Prints', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShoePrints
include('fontawesome/Solid/ShoePrints')

' renders the element
ShoePrints('ShoePrints', 'Shoe Prints', 'an optional tech label', 'an optional description')
@enduml
```


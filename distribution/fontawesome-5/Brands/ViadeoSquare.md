# ViadeoSquare


```text
fontawesome-5/Brands/ViadeoSquare
```

```text
include('fontawesome-5/Brands/ViadeoSquare')
```



| Illustration | ViadeoSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/ViadeoSquare.png) | ![illustration for ViadeoSquare](../../fontawesome-5/Brands/ViadeoSquare.Local.png) |




## ViadeoSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ViadeoSquare
include('fontawesome-5/Brands/ViadeoSquare')

' renders the element
ViadeoSquare('ViadeoSquare', 'Viadeo Square', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ViadeoSquare
include('fontawesome-5/Brands/ViadeoSquare')

' renders the element
ViadeoSquare('ViadeoSquare', 'Viadeo Square', 'an optional tech label')
@enduml
```


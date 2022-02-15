# ViadeoSquare


```text
fontawesome-6/Brands/ViadeoSquare
```

```text
include('fontawesome-6/Brands/ViadeoSquare')
```



| Illustration | ViadeoSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/ViadeoSquare.png) | ![illustration for ViadeoSquare](../../fontawesome-6/Brands/ViadeoSquare.Local.png) |




## ViadeoSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ViadeoSquare
include('fontawesome-6/Brands/ViadeoSquare')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ViadeoSquare
include('fontawesome-6/Brands/ViadeoSquare')

' renders the element
ViadeoSquare('ViadeoSquare', 'Viadeo Square', 'an optional tech label')
@enduml
```


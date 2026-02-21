# SquareFoot


```text
material/Content/SquareFoot
```

```text
include('material/Content/SquareFoot')
```



| Illustration | SquareFoot |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/SquareFoot.png) | ![illustration for SquareFoot](../../material/Content/SquareFoot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareFootXs>`
- `<$SquareFootSm>`
- `<$SquareFootMd>`
- `<$SquareFootLg>`





## SquareFoot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SquareFoot
include('material/Content/SquareFoot')

' renders the element
SquareFoot('SquareFoot', 'Square Foot', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element SquareFoot
include('material/Content/SquareFoot')

' renders the element
SquareFoot('SquareFoot', 'Square Foot', 'an optional tech label', 'an optional description')
@enduml
```


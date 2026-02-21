# SquareViadeo


```text
fontawesome/Brands/SquareViadeo
```

```text
include('fontawesome/Brands/SquareViadeo')
```



| Illustration | SquareViadeo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareViadeo.png) | ![illustration for SquareViadeo](../../fontawesome/Brands/SquareViadeo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareViadeoXs>`
- `<$SquareViadeoSm>`
- `<$SquareViadeoMd>`
- `<$SquareViadeoLg>`





## SquareViadeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareViadeo
include('fontawesome/Brands/SquareViadeo')

' renders the element
SquareViadeo('SquareViadeo', 'Square Viadeo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareViadeo
include('fontawesome/Brands/SquareViadeo')

' renders the element
SquareViadeo('SquareViadeo', 'Square Viadeo', 'an optional tech label', 'an optional description')
@enduml
```


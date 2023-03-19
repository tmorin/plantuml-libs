# SquareXing


```text
fontawesome-6/Brands/SquareXing
```

```text
include('fontawesome-6/Brands/SquareXing')
```



| Illustration | SquareXing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareXing.png) | ![illustration for SquareXing](../../fontawesome-6/Brands/SquareXing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareXingXs>`
- `<$SquareXingSm>`
- `<$SquareXingMd>`
- `<$SquareXingLg>`





## SquareXing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareXing
include('fontawesome-6/Brands/SquareXing')

' renders the element
SquareXing('SquareXing', 'Square Xing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareXing
include('fontawesome-6/Brands/SquareXing')

' renders the element
SquareXing('SquareXing', 'Square Xing', 'an optional tech label', 'an optional description')
@enduml
```


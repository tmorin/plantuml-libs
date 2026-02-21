# SquareVimeo


```text
fontawesome/Brands/SquareVimeo
```

```text
include('fontawesome/Brands/SquareVimeo')
```



| Illustration | SquareVimeo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareVimeo.png) | ![illustration for SquareVimeo](../../fontawesome/Brands/SquareVimeo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareVimeoXs>`
- `<$SquareVimeoSm>`
- `<$SquareVimeoMd>`
- `<$SquareVimeoLg>`





## SquareVimeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareVimeo
include('fontawesome/Brands/SquareVimeo')

' renders the element
SquareVimeo('SquareVimeo', 'Square Vimeo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareVimeo
include('fontawesome/Brands/SquareVimeo')

' renders the element
SquareVimeo('SquareVimeo', 'Square Vimeo', 'an optional tech label', 'an optional description')
@enduml
```


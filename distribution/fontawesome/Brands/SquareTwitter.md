# SquareTwitter


```text
fontawesome/Brands/SquareTwitter
```

```text
include('fontawesome/Brands/SquareTwitter')
```



| Illustration | SquareTwitter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareTwitter.png) | ![illustration for SquareTwitter](../../fontawesome/Brands/SquareTwitter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareTwitterXs>`
- `<$SquareTwitterSm>`
- `<$SquareTwitterMd>`
- `<$SquareTwitterLg>`





## SquareTwitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareTwitter
include('fontawesome/Brands/SquareTwitter')

' renders the element
SquareTwitter('SquareTwitter', 'Square Twitter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareTwitter
include('fontawesome/Brands/SquareTwitter')

' renders the element
SquareTwitter('SquareTwitter', 'Square Twitter', 'an optional tech label', 'an optional description')
@enduml
```


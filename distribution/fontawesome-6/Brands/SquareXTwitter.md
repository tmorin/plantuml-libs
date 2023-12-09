# SquareXTwitter


```text
fontawesome-6/Brands/SquareXTwitter
```

```text
include('fontawesome-6/Brands/SquareXTwitter')
```



| Illustration | SquareXTwitter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareXTwitter.png) | ![illustration for SquareXTwitter](../../fontawesome-6/Brands/SquareXTwitter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareXTwitterXs>`
- `<$SquareXTwitterSm>`
- `<$SquareXTwitterMd>`
- `<$SquareXTwitterLg>`





## SquareXTwitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareXTwitter
include('fontawesome-6/Brands/SquareXTwitter')

' renders the element
SquareXTwitter('SquareXTwitter', 'Square X Twitter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareXTwitter
include('fontawesome-6/Brands/SquareXTwitter')

' renders the element
SquareXTwitter('SquareXTwitter', 'Square X Twitter', 'an optional tech label', 'an optional description')
@enduml
```


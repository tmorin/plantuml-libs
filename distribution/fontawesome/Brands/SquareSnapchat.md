# SquareSnapchat


```text
fontawesome/Brands/SquareSnapchat
```

```text
include('fontawesome/Brands/SquareSnapchat')
```



| Illustration | SquareSnapchat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareSnapchat.png) | ![illustration for SquareSnapchat](../../fontawesome/Brands/SquareSnapchat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareSnapchatXs>`
- `<$SquareSnapchatSm>`
- `<$SquareSnapchatMd>`
- `<$SquareSnapchatLg>`





## SquareSnapchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareSnapchat
include('fontawesome/Brands/SquareSnapchat')

' renders the element
SquareSnapchat('SquareSnapchat', 'Square Snapchat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareSnapchat
include('fontawesome/Brands/SquareSnapchat')

' renders the element
SquareSnapchat('SquareSnapchat', 'Square Snapchat', 'an optional tech label', 'an optional description')
@enduml
```


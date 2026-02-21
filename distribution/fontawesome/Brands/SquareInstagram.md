# SquareInstagram


```text
fontawesome/Brands/SquareInstagram
```

```text
include('fontawesome/Brands/SquareInstagram')
```



| Illustration | SquareInstagram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareInstagram.png) | ![illustration for SquareInstagram](../../fontawesome/Brands/SquareInstagram.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareInstagramXs>`
- `<$SquareInstagramSm>`
- `<$SquareInstagramMd>`
- `<$SquareInstagramLg>`





## SquareInstagram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareInstagram
include('fontawesome/Brands/SquareInstagram')

' renders the element
SquareInstagram('SquareInstagram', 'Square Instagram', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareInstagram
include('fontawesome/Brands/SquareInstagram')

' renders the element
SquareInstagram('SquareInstagram', 'Square Instagram', 'an optional tech label', 'an optional description')
@enduml
```


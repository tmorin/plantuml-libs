# Gifts


```text
fontawesome/Solid/Gifts
```

```text
include('fontawesome/Solid/Gifts')
```



| Illustration | Gifts |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Gifts.png) | ![illustration for Gifts](../../fontawesome/Solid/Gifts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GiftsXs>`
- `<$GiftsSm>`
- `<$GiftsMd>`
- `<$GiftsLg>`





## Gifts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gifts
include('fontawesome/Solid/Gifts')

' renders the element
Gifts('Gifts', 'Gifts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gifts
include('fontawesome/Solid/Gifts')

' renders the element
Gifts('Gifts', 'Gifts', 'an optional tech label', 'an optional description')
@enduml
```


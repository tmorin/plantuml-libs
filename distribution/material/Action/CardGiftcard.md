# CardGiftcard


```text
material/Action/CardGiftcard
```

```text
include('material/Action/CardGiftcard')
```



| Illustration | CardGiftcard |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/CardGiftcard.png) | ![illustration for CardGiftcard](../../material/Action/CardGiftcard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CardGiftcardXs>`
- `<$CardGiftcardSm>`
- `<$CardGiftcardMd>`
- `<$CardGiftcardLg>`





## CardGiftcard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CardGiftcard
include('material/Action/CardGiftcard')

' renders the element
CardGiftcard('CardGiftcard', 'Card Giftcard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CardGiftcard
include('material/Action/CardGiftcard')

' renders the element
CardGiftcard('CardGiftcard', 'Card Giftcard', 'an optional tech label', 'an optional description')
@enduml
```


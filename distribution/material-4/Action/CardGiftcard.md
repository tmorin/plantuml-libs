# CardGiftcard


```text
material-4/Action/CardGiftcard
```

```text
include('material-4/Action/CardGiftcard')
```



| Illustration | CardGiftcard |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CardGiftcard.png) | ![illustration for CardGiftcard](../../material-4/Action/CardGiftcard.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element CardGiftcard
include('material-4/Action/CardGiftcard')

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
include('material-4/bootstrap')

' loads the Item which embeds the element CardGiftcard
include('material-4/Action/CardGiftcard')

' renders the element
CardGiftcard('CardGiftcard', 'Card Giftcard', 'an optional tech label', 'an optional description')
@enduml
```


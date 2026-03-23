# WhatsappSquare


```text
fontawesome/Brands/WhatsappSquare
```

```text
include('fontawesome/Brands/WhatsappSquare')
```



| Illustration | WhatsappSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/WhatsappSquare.png) | ![illustration for WhatsappSquare](../../fontawesome/Brands/WhatsappSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WhatsappSquareXs>`
- `<$WhatsappSquareSm>`
- `<$WhatsappSquareMd>`
- `<$WhatsappSquareLg>`





## WhatsappSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WhatsappSquare
include('fontawesome/Brands/WhatsappSquare')

' renders the element
WhatsappSquare('WhatsappSquare', 'Whatsapp Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WhatsappSquare
include('fontawesome/Brands/WhatsappSquare')

' renders the element
WhatsappSquare('WhatsappSquare', 'Whatsapp Square', 'an optional tech label', 'an optional description')
@enduml
```


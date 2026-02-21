# SquareWhatsapp


```text
fontawesome/Brands/SquareWhatsapp
```

```text
include('fontawesome/Brands/SquareWhatsapp')
```



| Illustration | SquareWhatsapp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareWhatsapp.png) | ![illustration for SquareWhatsapp](../../fontawesome/Brands/SquareWhatsapp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareWhatsappXs>`
- `<$SquareWhatsappSm>`
- `<$SquareWhatsappMd>`
- `<$SquareWhatsappLg>`





## SquareWhatsapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareWhatsapp
include('fontawesome/Brands/SquareWhatsapp')

' renders the element
SquareWhatsapp('SquareWhatsapp', 'Square Whatsapp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareWhatsapp
include('fontawesome/Brands/SquareWhatsapp')

' renders the element
SquareWhatsapp('SquareWhatsapp', 'Square Whatsapp', 'an optional tech label', 'an optional description')
@enduml
```


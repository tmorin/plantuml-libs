# Whatsapp


```text
simpleicons-8/W/Whatsapp
```

```text
include('simpleicons-8/W/Whatsapp')
```



| Illustration | Whatsapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Whatsapp.png) | ![illustration for Whatsapp](../../simpleicons-8/W/Whatsapp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WhatsappXs>`
- `<$WhatsappSm>`
- `<$WhatsappMd>`
- `<$WhatsappLg>`





## Whatsapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Whatsapp
include('simpleicons-8/W/Whatsapp')

' renders the element
Whatsapp('Whatsapp', 'Whatsapp', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Whatsapp
include('simpleicons-8/W/Whatsapp')

' renders the element
Whatsapp('Whatsapp', 'Whatsapp', 'an optional tech label', 'an optional description')
@enduml
```


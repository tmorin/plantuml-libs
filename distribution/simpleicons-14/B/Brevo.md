# Brevo


```text
simpleicons-14/B/Brevo
```

```text
include('simpleicons-14/B/Brevo')
```



| Illustration | Brevo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Brevo.png) | ![illustration for Brevo](../../simpleicons-14/B/Brevo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrevoXs>`
- `<$BrevoSm>`
- `<$BrevoMd>`
- `<$BrevoLg>`





## Brevo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Brevo
include('simpleicons-14/B/Brevo')

' renders the element
Brevo('Brevo', 'Brevo', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Brevo
include('simpleicons-14/B/Brevo')

' renders the element
Brevo('Brevo', 'Brevo', 'an optional tech label', 'an optional description')
@enduml
```


# Kleinanzeigen


```text
simpleicons-14/K/Kleinanzeigen
```

```text
include('simpleicons-14/K/Kleinanzeigen')
```



| Illustration | Kleinanzeigen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kleinanzeigen.png) | ![illustration for Kleinanzeigen](../../simpleicons-14/K/Kleinanzeigen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KleinanzeigenXs>`
- `<$KleinanzeigenSm>`
- `<$KleinanzeigenMd>`
- `<$KleinanzeigenLg>`





## Kleinanzeigen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kleinanzeigen
include('simpleicons-14/K/Kleinanzeigen')

' renders the element
Kleinanzeigen('Kleinanzeigen', 'Kleinanzeigen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kleinanzeigen
include('simpleicons-14/K/Kleinanzeigen')

' renders the element
Kleinanzeigen('Kleinanzeigen', 'Kleinanzeigen', 'an optional tech label', 'an optional description')
@enduml
```


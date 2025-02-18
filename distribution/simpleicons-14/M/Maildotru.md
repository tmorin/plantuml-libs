# Maildotru


```text
simpleicons-14/M/Maildotru
```

```text
include('simpleicons-14/M/Maildotru')
```



| Illustration | Maildotru |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Maildotru.png) | ![illustration for Maildotru](../../simpleicons-14/M/Maildotru.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaildotruXs>`
- `<$MaildotruSm>`
- `<$MaildotruMd>`
- `<$MaildotruLg>`





## Maildotru

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Maildotru
include('simpleicons-14/M/Maildotru')

' renders the element
Maildotru('Maildotru', 'Maildotru', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maildotru
include('simpleicons-14/M/Maildotru')

' renders the element
Maildotru('Maildotru', 'Maildotru', 'an optional tech label', 'an optional description')
@enduml
```


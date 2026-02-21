# Maildotru


```text
simpleicons/M/Maildotru
```

```text
include('simpleicons/M/Maildotru')
```



| Illustration | Maildotru |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Maildotru.png) | ![illustration for Maildotru](../../simpleicons/M/Maildotru.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Maildotru
include('simpleicons/M/Maildotru')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Maildotru
include('simpleicons/M/Maildotru')

' renders the element
Maildotru('Maildotru', 'Maildotru', 'an optional tech label', 'an optional description')
@enduml
```


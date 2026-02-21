# Maildotcom


```text
simpleicons-14/M/Maildotcom
```

```text
include('simpleicons-14/M/Maildotcom')
```



| Illustration | Maildotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Maildotcom.png) | ![illustration for Maildotcom](../../simpleicons-14/M/Maildotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaildotcomXs>`
- `<$MaildotcomSm>`
- `<$MaildotcomMd>`
- `<$MaildotcomLg>`





## Maildotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Maildotcom
include('simpleicons-14/M/Maildotcom')

' renders the element
Maildotcom('Maildotcom', 'Maildotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maildotcom
include('simpleicons-14/M/Maildotcom')

' renders the element
Maildotcom('Maildotcom', 'Maildotcom', 'an optional tech label', 'an optional description')
@enduml
```


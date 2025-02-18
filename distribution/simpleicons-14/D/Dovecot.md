# Dovecot


```text
simpleicons-14/D/Dovecot
```

```text
include('simpleicons-14/D/Dovecot')
```



| Illustration | Dovecot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dovecot.png) | ![illustration for Dovecot](../../simpleicons-14/D/Dovecot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DovecotXs>`
- `<$DovecotSm>`
- `<$DovecotMd>`
- `<$DovecotLg>`





## Dovecot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dovecot
include('simpleicons-14/D/Dovecot')

' renders the element
Dovecot('Dovecot', 'Dovecot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dovecot
include('simpleicons-14/D/Dovecot')

' renders the element
Dovecot('Dovecot', 'Dovecot', 'an optional tech label', 'an optional description')
@enduml
```


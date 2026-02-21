# Mailgun


```text
simpleicons/M/Mailgun
```

```text
include('simpleicons/M/Mailgun')
```



| Illustration | Mailgun |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mailgun.png) | ![illustration for Mailgun](../../simpleicons/M/Mailgun.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MailgunXs>`
- `<$MailgunSm>`
- `<$MailgunMd>`
- `<$MailgunLg>`





## Mailgun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mailgun
include('simpleicons/M/Mailgun')

' renders the element
Mailgun('Mailgun', 'Mailgun', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mailgun
include('simpleicons/M/Mailgun')

' renders the element
Mailgun('Mailgun', 'Mailgun', 'an optional tech label', 'an optional description')
@enduml
```


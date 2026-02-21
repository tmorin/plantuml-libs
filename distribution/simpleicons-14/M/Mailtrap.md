# Mailtrap


```text
simpleicons-14/M/Mailtrap
```

```text
include('simpleicons-14/M/Mailtrap')
```



| Illustration | Mailtrap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mailtrap.png) | ![illustration for Mailtrap](../../simpleicons-14/M/Mailtrap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MailtrapXs>`
- `<$MailtrapSm>`
- `<$MailtrapMd>`
- `<$MailtrapLg>`





## Mailtrap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mailtrap
include('simpleicons-14/M/Mailtrap')

' renders the element
Mailtrap('Mailtrap', 'Mailtrap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mailtrap
include('simpleicons-14/M/Mailtrap')

' renders the element
Mailtrap('Mailtrap', 'Mailtrap', 'an optional tech label', 'an optional description')
@enduml
```


# Mailchimp


```text
simpleicons-8/M/Mailchimp
```

```text
include('simpleicons-8/M/Mailchimp')
```



| Illustration | Mailchimp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Mailchimp.png) | ![illustration for Mailchimp](../../simpleicons-8/M/Mailchimp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MailchimpXs>`
- `<$MailchimpSm>`
- `<$MailchimpMd>`
- `<$MailchimpLg>`





## Mailchimp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mailchimp
include('simpleicons-8/M/Mailchimp')

' renders the element
Mailchimp('Mailchimp', 'Mailchimp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mailchimp
include('simpleicons-8/M/Mailchimp')

' renders the element
Mailchimp('Mailchimp', 'Mailchimp', 'an optional tech label', 'an optional description')
@enduml
```


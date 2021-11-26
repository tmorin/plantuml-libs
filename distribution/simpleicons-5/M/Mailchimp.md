# Mailchimp


```text
simpleicons-5/M/Mailchimp
```

```text
include('simpleicons-5/M/Mailchimp')
```



| Illustration | Mailchimp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mailchimp.png) | ![illustration for Mailchimp](../../simpleicons-5/M/Mailchimp.Local.png) |




## Mailchimp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mailchimp
include('simpleicons-5/M/Mailchimp')

' renders the element
Mailchimp('Mailchimp', 'Mailchimp', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mailchimp
include('simpleicons-5/M/Mailchimp')

' renders the element
Mailchimp('Mailchimp', 'Mailchimp', 'an optional tech label')
@enduml
```


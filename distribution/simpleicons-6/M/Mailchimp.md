# Mailchimp


```text
simpleicons-6/M/Mailchimp
```

```text
include('simpleicons-6/M/Mailchimp')
```



| Illustration | Mailchimp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mailchimp.png) | ![illustration for Mailchimp](../../simpleicons-6/M/Mailchimp.Local.png) |




## Mailchimp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mailchimp
include('simpleicons-6/M/Mailchimp')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mailchimp
include('simpleicons-6/M/Mailchimp')

' renders the element
Mailchimp('Mailchimp', 'Mailchimp', 'an optional tech label')
@enduml
```


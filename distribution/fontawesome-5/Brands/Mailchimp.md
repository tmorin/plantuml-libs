# Mailchimp


```text
fontawesome-5/Brands/Mailchimp
```

```text
include('fontawesome-5/Brands/Mailchimp')
```



| Illustration | Mailchimp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Mailchimp.png) | ![illustration for Mailchimp](../../fontawesome-5/Brands/Mailchimp.Local.png) |




## Mailchimp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mailchimp
include('fontawesome-5/Brands/Mailchimp')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mailchimp
include('fontawesome-5/Brands/Mailchimp')

' renders the element
Mailchimp('Mailchimp', 'Mailchimp', 'an optional tech label')
@enduml
```


# Email


```text
material-4/Communication/Email
```

```text
include('material-4/Communication/Email')
```



| Illustration | Email |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/Email.png) | ![illustration for Email](../../material-4/Communication/Email.Local.png) |




## Email

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Email
include('material-4/Communication/Email')

' renders the element
Email('Email', 'Email', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Email
include('material-4/Communication/Email')

' renders the element
Email('Email', 'Email', 'an optional tech label')
@enduml
```


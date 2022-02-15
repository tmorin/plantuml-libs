# Minutemailer


```text
simpleicons-6/M/Minutemailer
```

```text
include('simpleicons-6/M/Minutemailer')
```



| Illustration | Minutemailer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Minutemailer.png) | ![illustration for Minutemailer](../../simpleicons-6/M/Minutemailer.Local.png) |




## Minutemailer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Minutemailer
include('simpleicons-6/M/Minutemailer')

' renders the element
Minutemailer('Minutemailer', 'Minutemailer', 'an optional tech label')
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

' loads the Item which embeds the element Minutemailer
include('simpleicons-6/M/Minutemailer')

' renders the element
Minutemailer('Minutemailer', 'Minutemailer', 'an optional tech label')
@enduml
```


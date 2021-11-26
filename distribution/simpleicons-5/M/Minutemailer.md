# Minutemailer


```text
simpleicons-5/M/Minutemailer
```

```text
include('simpleicons-5/M/Minutemailer')
```



| Illustration | Minutemailer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Minutemailer.png) | ![illustration for Minutemailer](../../simpleicons-5/M/Minutemailer.Local.png) |




## Minutemailer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Minutemailer
include('simpleicons-5/M/Minutemailer')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Minutemailer
include('simpleicons-5/M/Minutemailer')

' renders the element
Minutemailer('Minutemailer', 'Minutemailer', 'an optional tech label')
@enduml
```


# AlternateEmail


```text
material-4/Communication/AlternateEmail
```

```text
include('material-4/Communication/AlternateEmail')
```



| Illustration | AlternateEmail |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/AlternateEmail.png) | ![illustration for AlternateEmail](../../material-4/Communication/AlternateEmail.Local.png) |




## AlternateEmail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AlternateEmail
include('material-4/Communication/AlternateEmail')

' renders the element
AlternateEmail('AlternateEmail', 'Alternate Email', 'an optional tech label')
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

' loads the Item which embeds the element AlternateEmail
include('material-4/Communication/AlternateEmail')

' renders the element
AlternateEmail('AlternateEmail', 'Alternate Email', 'an optional tech label')
@enduml
```


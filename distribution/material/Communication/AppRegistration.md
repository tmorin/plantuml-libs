# AppRegistration


```text
material/Communication/AppRegistration
```

```text
include('material/Communication/AppRegistration')
```



| Illustration | AppRegistration |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/AppRegistration.png) | ![illustration for AppRegistration](../../material/Communication/AppRegistration.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppRegistrationXs>`
- `<$AppRegistrationSm>`
- `<$AppRegistrationMd>`
- `<$AppRegistrationLg>`





## AppRegistration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AppRegistration
include('material/Communication/AppRegistration')

' renders the element
AppRegistration('AppRegistration', 'App Registration', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element AppRegistration
include('material/Communication/AppRegistration')

' renders the element
AppRegistration('AppRegistration', 'App Registration', 'an optional tech label', 'an optional description')
@enduml
```


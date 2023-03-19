# Passport


```text
fontawesome-6/Solid/Passport
```

```text
include('fontawesome-6/Solid/Passport')
```



| Illustration | Passport |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Passport.png) | ![illustration for Passport](../../fontawesome-6/Solid/Passport.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PassportXs>`
- `<$PassportSm>`
- `<$PassportMd>`
- `<$PassportLg>`





## Passport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Passport
include('fontawesome-6/Solid/Passport')

' renders the element
Passport('Passport', 'Passport', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Passport
include('fontawesome-6/Solid/Passport')

' renders the element
Passport('Passport', 'Passport', 'an optional tech label', 'an optional description')
@enduml
```


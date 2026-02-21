# Passport


```text
simpleicons/P/Passport
```

```text
include('simpleicons/P/Passport')
```



| Illustration | Passport |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Passport.png) | ![illustration for Passport](../../simpleicons/P/Passport.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Passport
include('simpleicons/P/Passport')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Passport
include('simpleicons/P/Passport')

' renders the element
Passport('Passport', 'Passport', 'an optional tech label', 'an optional description')
@enduml
```


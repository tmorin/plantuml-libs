# Passport


```text
simpleicons-8/P/Passport
```

```text
include('simpleicons-8/P/Passport')
```



| Illustration | Passport |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Passport.png) | ![illustration for Passport](../../simpleicons-8/P/Passport.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Passport
include('simpleicons-8/P/Passport')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Passport
include('simpleicons-8/P/Passport')

' renders the element
Passport('Passport', 'Passport', 'an optional tech label', 'an optional description')
@enduml
```


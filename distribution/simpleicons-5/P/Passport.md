# Passport


```text
simpleicons-5/P/Passport
```

```text
include('simpleicons-5/P/Passport')
```



| Illustration | Passport |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Passport.png) | ![illustration for Passport](../../simpleicons-5/P/Passport.Local.png) |




## Passport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Passport
include('simpleicons-5/P/Passport')

' renders the element
Passport('Passport', 'Passport', 'an optional tech label')
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

' loads the Item which embeds the element Passport
include('simpleicons-5/P/Passport')

' renders the element
Passport('Passport', 'Passport', 'an optional tech label')
@enduml
```


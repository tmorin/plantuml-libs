# Passport


```text
simpleicons-6/P/Passport
```

```text
include('simpleicons-6/P/Passport')
```



| Illustration | Passport |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Passport.png) | ![illustration for Passport](../../simpleicons-6/P/Passport.Local.png) |




## Passport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Passport
include('simpleicons-6/P/Passport')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Passport
include('simpleicons-6/P/Passport')

' renders the element
Passport('Passport', 'Passport', 'an optional tech label')
@enduml
```


# Dotenv


```text
simpleicons-7/D/Dotenv
```

```text
include('simpleicons-7/D/Dotenv')
```



| Illustration | Dotenv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dotenv.png) | ![illustration for Dotenv](../../simpleicons-7/D/Dotenv.Local.png) |




## Dotenv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dotenv
include('simpleicons-7/D/Dotenv')

' renders the element
Dotenv('Dotenv', 'Dotenv', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dotenv
include('simpleicons-7/D/Dotenv')

' renders the element
Dotenv('Dotenv', 'Dotenv', 'an optional tech label', 'an optional description')
@enduml
```


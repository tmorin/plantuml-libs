# Nintendogamecube


```text
simpleicons-5/N/Nintendogamecube
```

```text
include('simpleicons-5/N/Nintendogamecube')
```



| Illustration | Nintendogamecube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nintendogamecube.png) | ![illustration for Nintendogamecube](../../simpleicons-5/N/Nintendogamecube.Local.png) |




## Nintendogamecube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nintendogamecube
include('simpleicons-5/N/Nintendogamecube')

' renders the element
Nintendogamecube('Nintendogamecube', 'Nintendogamecube', 'an optional tech label')
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

' loads the Item which embeds the element Nintendogamecube
include('simpleicons-5/N/Nintendogamecube')

' renders the element
Nintendogamecube('Nintendogamecube', 'Nintendogamecube', 'an optional tech label')
@enduml
```


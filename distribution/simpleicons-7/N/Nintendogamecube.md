# Nintendogamecube


```text
simpleicons-7/N/Nintendogamecube
```

```text
include('simpleicons-7/N/Nintendogamecube')
```



| Illustration | Nintendogamecube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nintendogamecube.png) | ![illustration for Nintendogamecube](../../simpleicons-7/N/Nintendogamecube.Local.png) |




## Nintendogamecube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nintendogamecube
include('simpleicons-7/N/Nintendogamecube')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nintendogamecube
include('simpleicons-7/N/Nintendogamecube')

' renders the element
Nintendogamecube('Nintendogamecube', 'Nintendogamecube', 'an optional tech label')
@enduml
```


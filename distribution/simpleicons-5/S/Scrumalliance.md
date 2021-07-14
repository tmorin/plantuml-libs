# Scrumalliance


```text
simpleicons-5/S/Scrumalliance
```

```text
include('simpleicons-5/S/Scrumalliance')
```



| Illustration | Scrumalliance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Scrumalliance.png) | ![illustration for Scrumalliance](../../simpleicons-5/S/Scrumalliance.Local.png) |




## Scrumalliance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Scrumalliance
include('simpleicons-5/S/Scrumalliance')

' renders the element
Scrumalliance('Scrumalliance', 'Scrumalliance', 'an optional tech label')
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

' loads the Item which embeds the element Scrumalliance
include('simpleicons-5/S/Scrumalliance')

' renders the element
Scrumalliance('Scrumalliance', 'Scrumalliance', 'an optional tech label')
@enduml
```


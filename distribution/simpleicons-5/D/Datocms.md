# Datocms


```text
simpleicons-5/D/Datocms
```

```text
include('simpleicons-5/D/Datocms')
```



| Illustration | Datocms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Datocms.png) | ![illustration for Datocms](../../simpleicons-5/D/Datocms.Local.png) |




## Datocms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Datocms
include('simpleicons-5/D/Datocms')

' renders the element
Datocms('Datocms', 'Datocms', 'an optional tech label')
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

' loads the Item which embeds the element Datocms
include('simpleicons-5/D/Datocms')

' renders the element
Datocms('Datocms', 'Datocms', 'an optional tech label')
@enduml
```


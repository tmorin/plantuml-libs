# Slideshare


```text
simpleicons-5/S/Slideshare
```

```text
include('simpleicons-5/S/Slideshare')
```



| Illustration | Slideshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Slideshare.png) | ![illustration for Slideshare](../../simpleicons-5/S/Slideshare.Local.png) |




## Slideshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Slideshare
include('simpleicons-5/S/Slideshare')

' renders the element
Slideshare('Slideshare', 'Slideshare', 'an optional tech label')
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

' loads the Item which embeds the element Slideshare
include('simpleicons-5/S/Slideshare')

' renders the element
Slideshare('Slideshare', 'Slideshare', 'an optional tech label')
@enduml
```


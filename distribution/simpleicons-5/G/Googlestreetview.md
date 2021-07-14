# Googlestreetview


```text
simpleicons-5/G/Googlestreetview
```

```text
include('simpleicons-5/G/Googlestreetview')
```



| Illustration | Googlestreetview |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlestreetview.png) | ![illustration for Googlestreetview](../../simpleicons-5/G/Googlestreetview.Local.png) |




## Googlestreetview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlestreetview
include('simpleicons-5/G/Googlestreetview')

' renders the element
Googlestreetview('Googlestreetview', 'Googlestreetview', 'an optional tech label')
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

' loads the Item which embeds the element Googlestreetview
include('simpleicons-5/G/Googlestreetview')

' renders the element
Googlestreetview('Googlestreetview', 'Googlestreetview', 'an optional tech label')
@enduml
```


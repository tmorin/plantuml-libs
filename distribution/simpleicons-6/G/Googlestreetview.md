# Googlestreetview


```text
simpleicons-6/G/Googlestreetview
```

```text
include('simpleicons-6/G/Googlestreetview')
```



| Illustration | Googlestreetview |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlestreetview.png) | ![illustration for Googlestreetview](../../simpleicons-6/G/Googlestreetview.Local.png) |




## Googlestreetview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlestreetview
include('simpleicons-6/G/Googlestreetview')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlestreetview
include('simpleicons-6/G/Googlestreetview')

' renders the element
Googlestreetview('Googlestreetview', 'Googlestreetview', 'an optional tech label')
@enduml
```


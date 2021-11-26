# Ionic


```text
simpleicons-5/I/Ionic
```

```text
include('simpleicons-5/I/Ionic')
```



| Illustration | Ionic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Ionic.png) | ![illustration for Ionic](../../simpleicons-5/I/Ionic.Local.png) |




## Ionic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ionic
include('simpleicons-5/I/Ionic')

' renders the element
Ionic('Ionic', 'Ionic', 'an optional tech label')
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

' loads the Item which embeds the element Ionic
include('simpleicons-5/I/Ionic')

' renders the element
Ionic('Ionic', 'Ionic', 'an optional tech label')
@enduml
```


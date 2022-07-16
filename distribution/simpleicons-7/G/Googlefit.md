# Googlefit


```text
simpleicons-7/G/Googlefit
```

```text
include('simpleicons-7/G/Googlefit')
```



| Illustration | Googlefit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlefit.png) | ![illustration for Googlefit](../../simpleicons-7/G/Googlefit.Local.png) |




## Googlefit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlefit
include('simpleicons-7/G/Googlefit')

' renders the element
Googlefit('Googlefit', 'Googlefit', 'an optional tech label')
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

' loads the Item which embeds the element Googlefit
include('simpleicons-7/G/Googlefit')

' renders the element
Googlefit('Googlefit', 'Googlefit', 'an optional tech label')
@enduml
```


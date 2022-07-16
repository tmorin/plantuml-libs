# Googlesheets


```text
simpleicons-7/G/Googlesheets
```

```text
include('simpleicons-7/G/Googlesheets')
```



| Illustration | Googlesheets |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlesheets.png) | ![illustration for Googlesheets](../../simpleicons-7/G/Googlesheets.Local.png) |




## Googlesheets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlesheets
include('simpleicons-7/G/Googlesheets')

' renders the element
Googlesheets('Googlesheets', 'Googlesheets', 'an optional tech label')
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

' loads the Item which embeds the element Googlesheets
include('simpleicons-7/G/Googlesheets')

' renders the element
Googlesheets('Googlesheets', 'Googlesheets', 'an optional tech label')
@enduml
```


# Googleanalytics


```text
simpleicons-6/G/Googleanalytics
```

```text
include('simpleicons-6/G/Googleanalytics')
```



| Illustration | Googleanalytics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googleanalytics.png) | ![illustration for Googleanalytics](../../simpleicons-6/G/Googleanalytics.Local.png) |




## Googleanalytics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googleanalytics
include('simpleicons-6/G/Googleanalytics')

' renders the element
Googleanalytics('Googleanalytics', 'Googleanalytics', 'an optional tech label')
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

' loads the Item which embeds the element Googleanalytics
include('simpleicons-6/G/Googleanalytics')

' renders the element
Googleanalytics('Googleanalytics', 'Googleanalytics', 'an optional tech label')
@enduml
```


# Mediafire


```text
simpleicons-7/M/Mediafire
```

```text
include('simpleicons-7/M/Mediafire')
```



| Illustration | Mediafire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mediafire.png) | ![illustration for Mediafire](../../simpleicons-7/M/Mediafire.Local.png) |




## Mediafire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mediafire
include('simpleicons-7/M/Mediafire')

' renders the element
Mediafire('Mediafire', 'Mediafire', 'an optional tech label')
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

' loads the Item which embeds the element Mediafire
include('simpleicons-7/M/Mediafire')

' renders the element
Mediafire('Mediafire', 'Mediafire', 'an optional tech label')
@enduml
```

# Googleplay


```text
simpleicons-6/G/Googleplay
```

```text
include('simpleicons-6/G/Googleplay')
```



| Illustration | Googleplay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googleplay.png) | ![illustration for Googleplay](../../simpleicons-6/G/Googleplay.Local.png) |




## Googleplay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googleplay
include('simpleicons-6/G/Googleplay')

' renders the element
Googleplay('Googleplay', 'Googleplay', 'an optional tech label')
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

' loads the Item which embeds the element Googleplay
include('simpleicons-6/G/Googleplay')

' renders the element
Googleplay('Googleplay', 'Googleplay', 'an optional tech label')
@enduml
```


# Googleplay


```text
simpleicons-5/G/Googleplay
```

```text
include('simpleicons-5/G/Googleplay')
```



| Illustration | Googleplay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googleplay.png) | ![illustration for Googleplay](../../simpleicons-5/G/Googleplay.Local.png) |




## Googleplay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googleplay
include('simpleicons-5/G/Googleplay')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googleplay
include('simpleicons-5/G/Googleplay')

' renders the element
Googleplay('Googleplay', 'Googleplay', 'an optional tech label')
@enduml
```


# Flipboard


```text
simpleicons-7/F/Flipboard
```

```text
include('simpleicons-7/F/Flipboard')
```



| Illustration | Flipboard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Flipboard.png) | ![illustration for Flipboard](../../simpleicons-7/F/Flipboard.Local.png) |




## Flipboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Flipboard
include('simpleicons-7/F/Flipboard')

' renders the element
Flipboard('Flipboard', 'Flipboard', 'an optional tech label')
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

' loads the Item which embeds the element Flipboard
include('simpleicons-7/F/Flipboard')

' renders the element
Flipboard('Flipboard', 'Flipboard', 'an optional tech label')
@enduml
```


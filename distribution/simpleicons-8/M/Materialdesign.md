# Materialdesign


```text
simpleicons-8/M/Materialdesign
```

```text
include('simpleicons-8/M/Materialdesign')
```



| Illustration | Materialdesign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Materialdesign.png) | ![illustration for Materialdesign](../../simpleicons-8/M/Materialdesign.Local.png) |




## Materialdesign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Materialdesign
include('simpleicons-8/M/Materialdesign')

' renders the element
Materialdesign('Materialdesign', 'Materialdesign', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Materialdesign
include('simpleicons-8/M/Materialdesign')

' renders the element
Materialdesign('Materialdesign', 'Materialdesign', 'an optional tech label', 'an optional description')
@enduml
```


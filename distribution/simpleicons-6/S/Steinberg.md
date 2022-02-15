# Steinberg


```text
simpleicons-6/S/Steinberg
```

```text
include('simpleicons-6/S/Steinberg')
```



| Illustration | Steinberg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Steinberg.png) | ![illustration for Steinberg](../../simpleicons-6/S/Steinberg.Local.png) |




## Steinberg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Steinberg
include('simpleicons-6/S/Steinberg')

' renders the element
Steinberg('Steinberg', 'Steinberg', 'an optional tech label')
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

' loads the Item which embeds the element Steinberg
include('simpleicons-6/S/Steinberg')

' renders the element
Steinberg('Steinberg', 'Steinberg', 'an optional tech label')
@enduml
```


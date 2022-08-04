# Googlemybusiness


```text
simpleicons-7/G/Googlemybusiness
```

```text
include('simpleicons-7/G/Googlemybusiness')
```



| Illustration | Googlemybusiness |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googlemybusiness.png) | ![illustration for Googlemybusiness](../../simpleicons-7/G/Googlemybusiness.Local.png) |




## Googlemybusiness

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googlemybusiness
include('simpleicons-7/G/Googlemybusiness')

' renders the element
Googlemybusiness('Googlemybusiness', 'Googlemybusiness', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlemybusiness
include('simpleicons-7/G/Googlemybusiness')

' renders the element
Googlemybusiness('Googlemybusiness', 'Googlemybusiness', 'an optional tech label', 'an optional description')
@enduml
```


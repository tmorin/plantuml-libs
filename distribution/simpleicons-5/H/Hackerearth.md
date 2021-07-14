# Hackerearth


```text
simpleicons-5/H/Hackerearth
```

```text
include('simpleicons-5/H/Hackerearth')
```



| Illustration | Hackerearth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hackerearth.png) | ![illustration for Hackerearth](../../simpleicons-5/H/Hackerearth.Local.png) |




## Hackerearth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hackerearth
include('simpleicons-5/H/Hackerearth')

' renders the element
Hackerearth('Hackerearth', 'Hackerearth', 'an optional tech label')
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

' loads the Item which embeds the element Hackerearth
include('simpleicons-5/H/Hackerearth')

' renders the element
Hackerearth('Hackerearth', 'Hackerearth', 'an optional tech label')
@enduml
```


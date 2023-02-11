# Hackerearth


```text
simpleicons-8/H/Hackerearth
```

```text
include('simpleicons-8/H/Hackerearth')
```



| Illustration | Hackerearth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hackerearth.png) | ![illustration for Hackerearth](../../simpleicons-8/H/Hackerearth.Local.png) |




## Hackerearth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hackerearth
include('simpleicons-8/H/Hackerearth')

' renders the element
Hackerearth('Hackerearth', 'Hackerearth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hackerearth
include('simpleicons-8/H/Hackerearth')

' renders the element
Hackerearth('Hackerearth', 'Hackerearth', 'an optional tech label', 'an optional description')
@enduml
```


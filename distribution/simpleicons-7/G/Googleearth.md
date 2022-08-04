# Googleearth


```text
simpleicons-7/G/Googleearth
```

```text
include('simpleicons-7/G/Googleearth')
```



| Illustration | Googleearth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googleearth.png) | ![illustration for Googleearth](../../simpleicons-7/G/Googleearth.Local.png) |




## Googleearth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googleearth
include('simpleicons-7/G/Googleearth')

' renders the element
Googleearth('Googleearth', 'Googleearth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleearth
include('simpleicons-7/G/Googleearth')

' renders the element
Googleearth('Googleearth', 'Googleearth', 'an optional tech label', 'an optional description')
@enduml
```


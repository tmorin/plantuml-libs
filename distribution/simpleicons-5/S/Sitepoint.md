# Sitepoint


```text
simpleicons-5/S/Sitepoint
```

```text
include('simpleicons-5/S/Sitepoint')
```



| Illustration | Sitepoint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sitepoint.png) | ![illustration for Sitepoint](../../simpleicons-5/S/Sitepoint.Local.png) |




## Sitepoint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sitepoint
include('simpleicons-5/S/Sitepoint')

' renders the element
Sitepoint('Sitepoint', 'Sitepoint', 'an optional tech label')
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

' loads the Item which embeds the element Sitepoint
include('simpleicons-5/S/Sitepoint')

' renders the element
Sitepoint('Sitepoint', 'Sitepoint', 'an optional tech label')
@enduml
```


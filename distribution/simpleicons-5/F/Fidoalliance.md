# Fidoalliance


```text
simpleicons-5/F/Fidoalliance
```

```text
include('simpleicons-5/F/Fidoalliance')
```



| Illustration | Fidoalliance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fidoalliance.png) | ![illustration for Fidoalliance](../../simpleicons-5/F/Fidoalliance.Local.png) |




## Fidoalliance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fidoalliance
include('simpleicons-5/F/Fidoalliance')

' renders the element
Fidoalliance('Fidoalliance', 'Fidoalliance', 'an optional tech label')
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

' loads the Item which embeds the element Fidoalliance
include('simpleicons-5/F/Fidoalliance')

' renders the element
Fidoalliance('Fidoalliance', 'Fidoalliance', 'an optional tech label')
@enduml
```


# Jameson


```text
simpleicons-5/J/Jameson
```

```text
include('simpleicons-5/J/Jameson')
```



| Illustration | Jameson |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jameson.png) | ![illustration for Jameson](../../simpleicons-5/J/Jameson.Local.png) |




## Jameson

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jameson
include('simpleicons-5/J/Jameson')

' renders the element
Jameson('Jameson', 'Jameson', 'an optional tech label')
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

' loads the Item which embeds the element Jameson
include('simpleicons-5/J/Jameson')

' renders the element
Jameson('Jameson', 'Jameson', 'an optional tech label')
@enduml
```


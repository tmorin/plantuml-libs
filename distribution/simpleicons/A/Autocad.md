# Autocad


```text
simpleicons/A/Autocad
```

```text
include('simpleicons/A/Autocad')
```



| Illustration | Autocad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Autocad.png) | ![illustration for Autocad](../../simpleicons/A/Autocad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutocadXs>`
- `<$AutocadSm>`
- `<$AutocadMd>`
- `<$AutocadLg>`





## Autocad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Autocad
include('simpleicons/A/Autocad')

' renders the element
Autocad('Autocad', 'Autocad', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Autocad
include('simpleicons/A/Autocad')

' renders the element
Autocad('Autocad', 'Autocad', 'an optional tech label', 'an optional description')
@enduml
```

